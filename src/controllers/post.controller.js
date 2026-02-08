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


const deletePost = async (req , res) =>{
    const {name} = req.body
    try {
        if (!name) {
            return res.status(400).json({message : "Name of post is required to Delete !"})
        }

        const post = await Post.findOne({
            name : name
        })

        if (!post) {
            return res.status(400).json({
                message : "Post not Found !"
            })
        }

        await Post.deleteOne({name : name});
        res.status(200).json({
            message : "Post was deleted successfully !"
        })

        
    } catch (error) {
        res.status(500).json({
            message : "Internal server error"
        })
    }

}


const getPosts = async (req , res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message : "Internal server error"
        })
    }
}

const updatePost = async (req , res) => {

    try {
        if (Object.keys(req.body).length === 0) {
           return res.status(400).json({
                message : "All fields are required "
            })
        }

        const post = await Post.findByIdAndUpdate(req.params.id , req.body,  { new : true });
        if(!post){
            return res.status(400).json({
                message : "Post Not Found"
            })
        }

        return res.status(200).json({
            message: "Post updated successfully",
            data: post
        });

    } catch (error) {
        res.status(500).json({
                message : "Internal Server Error"
        })
    }
}

export {
    registerPost,
    deletePost,
    getPosts,
    updatePost,
}