import connectDB from "./config/datebase.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path : './.env'
});


const startServer = async ()=>{
    try {
        await connectDB();

        app.on('error', (error)=>{
            console.log('Error' , error);
            throw error;
            
        });

        app.listen(process.env.PORT || 8000 , ()=>{
            console.log(`Server is running on the port ${process.env.PORT}`);
            
            
        })
    } catch (error) {
        console.log('Mongo Db is failed ' , error);
        
    }
}


startServer();