import mongoose from "mongoose";
import colors from 'colors'


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(
          "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0",
          {}
        );
        console.log(`MONGODB connected ${conn.connection.host} `.cyan.underline)
    }catch(error){
        console.error(`Error, ${error.message}`.red.underline.bold);
        process.exit(1)
    }
}

export default connectDB