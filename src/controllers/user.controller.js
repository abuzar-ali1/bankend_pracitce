import { User } from "../models/users.model.js";

const userRegister = async (req , res) => {
    const {userName , password , email} = req.body;

    try {
        

        // basic Validation

        if(!userName || !email || !password){
            return res.status(400).json({message : "All fields are Required!"})
        }

        //  Check for If user Already exists

        const userExists = await User.findOne({email : email.toLowerCase()})
        if(userExists){
            return res.status(400).json({message : "User is already exists"})

        }

        // create  user

        const user = User.create({
            userName,
            password,
            email : email.toLowerCase(),
            loggedIn : false,
        })
        res.status(201).json({
            message : "User regestered succesfully !",
            user : {id : user._id , email : user.email , userName : user.userName}
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
                userName : user.userName,
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