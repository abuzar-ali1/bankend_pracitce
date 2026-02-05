import { Post } from "../models/posts.models.js";

const registerPost = async (req , res) =>{
    const {name , description , age} = req.body; 
    try {

         if(!name || !description || !age){
                    return res.status(400).json({message : "All fields are Required!"})
                }        
                // create  post
        
                const post = await Post.create({
                    name,
                    description,
                    age
                })
                res.status(201).json({
                    message : "Post regestered succesfully !",
                    post : {id : post._id  , name : post.name ,  description : post.description , age : post.age}
                })
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Error ",
        })
    }
}




export {
    registerPost,
}