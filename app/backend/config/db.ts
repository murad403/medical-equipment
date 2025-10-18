import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error('Please define the MONGODB_URI environment variable');
}

interface ICachedMongoose {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: ICachedMongoose | undefined;
}

let cached: ICachedMongoose = global.mongoose ?? {conn: null, promise: null};

async function dbConnect(): Promise<Mongoose>{
    if(cached.conn){
        return cached.conn;
    }
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI!)
        .then((mongooseInstance) =>{
            console.log("Mongoose connected successfully");
            return mongooseInstance;
        })
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
export default dbConnect;