import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})

const dbConnection = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/ngo`)
        console.log("MONGODB IS CONNECTED !!")
    } catch (error) {
        console.log("CONNECTION FAILD !!", error)
    }
}
export default dbConnection