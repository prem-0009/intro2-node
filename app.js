const express = require('express');
const app = express();//invoking the express() big function
const path = require('path')

const morgan = require('morgan');

console.clear()
require('dotenv').config();//getting dotenv ..create .env file too

const userRoutes = require('./routes/userRoutes');

// const logger = require('./middlewares/logger')


const port1 = process.env.PORTE || 3000;//

// app.use(express.static(path.join(__dirname, 'public')))//??

//middle ware 
//is a function 


//hook middleware every time u run a program

//general middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))//??handle url encode data need to add for post request

//routes middleware
app.use('/api/v1/users', userRoutes)


app.listen(port1, () => {
    console.log(`listening on ${port1}`)
});
