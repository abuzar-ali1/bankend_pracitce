import { Post } from "../models/posts.models";

const registerPost = async (res , req) =>{
    const {name , description , age} = req.body; 
    try {

         if(!name || !description || !age){
                    return res.status(400).json({message : "All fields are Required!"})
                }        
                // create  post
        
                const post = Post.create({
                    name,
                    description,
                    age
                })
                res.status(201).json({
                    message : "Post regestered succesfully !",
                    post : {id : user._id , description : post.description , name : post.name , age : post.age}
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