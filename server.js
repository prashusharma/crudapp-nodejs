const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
// var morgan = require('morgan')
const app = express()
dotenv.config();
// dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 3000
// log request
// app.use(morgan('tiny'));

// mongoDB connectinon
connectDB();
// parse body to body parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
// app.set("view", path.resolve(__dirname, "view/ejs"))

//load assets
app.use( express.static(path.resolve(__dirname, "assets/css")))
app.use( express.static(path.resolve(__dirname, "assets/js")))
app.use( express.static(path.resolve(__dirname, "assets/img")))
// app.use('/update-user', express.static(path.resolve(__dirname, "assets/css")))




//load routers
app.use('/', require('./server/routes/routers'))



app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})