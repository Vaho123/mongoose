require("dotenv").config()
const mongoose = require ("mongoose")

const connection = async () => {
    try {
        await mongoose.connect (
          //   "mongodb+srv://ValerieCN:easypass@cluster0.hfgkrrs.mongodb.net/test?retryWrites=true&w=majority"
          //   "mongodb+srv://ValerieCN:easypass@cluster0.hfgkrrs.mongodb.net/m46-mongoose-live?retryWrites=true&w=majority"
          process.env.MONGO_URI
        )
        console.log("Database connection established")
    } catch (error) {
        console.log(error) // so we can see if anything happend
    }
}

connection()