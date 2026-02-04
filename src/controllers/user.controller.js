import { User } from "../models/users.model.js";

const userRegister = async (req , res) => {
    const {username , password , email} = req.body;

    try {
        

        // basic Validation

        if(!username || !email || !password){
            return res.status(400).json({message : "All fields are Required!"})
        }

        //  Check for If user Already exists

        const userExists = await User.findOne({email : email.toLowerCase()})
        if(userExists){
            return res.status(400).json({message : "User is already exists"})

        }

        // create  user

        const user = User.create({
            username,
            password,
            email : email.toLowerCase(),
        })
        res.status(201).json({
            message : "User regestered succesfully !",
            user : {id : user._id , email : user.email , username : user.username}
        })
    } catch (error) {
        res.status(500).json({message : "Some thing went wrong try again!" , error : error.message})
    }
}



const userLogin = async(req , res)=>{
    try {
        const {email , password} = req.body;

        const user = await User.findOne({
            email : email.toLowerCase(),
        })

        if(!user) return res.status(400).json({
            message : "User Not found!"
        })

        const isMatch = await user.comparePassword(password) 
        if(!isMatch) return res.status(400).json({
            message : "Invalid User details not in the database",
            user : {
                id : user._id,
                username : user.username,
                email : user.email,
            }
        })

        res.status(200).json({
            message : "User logged in successfully",
            user : {
                id : user._id,
                username : user.username,
                email : user.email,
            }
        })
    } catch (error) {

        res.status(500).json({
            message : "The  internal server error !"
        })
        
    }
}


export {
    userRegister,
    userLogin    

}