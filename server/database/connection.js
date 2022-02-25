const mongoose = require('mongoose')
const connectDB = async()=>{
    try {
        //mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModified:false,
            // useCreateIndex:true
        })

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        
        console.log(error);
        process.exit(1);
    }
}

module.exports =connectDB