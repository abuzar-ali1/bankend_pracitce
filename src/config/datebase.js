import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstants = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`\n Mongo db Conneccted !! ${connectionInstants.connection.host}`);
        

    } catch (error) {
        
        console.log(error);
        process.exit(1)
    }
}


export default connectDB;