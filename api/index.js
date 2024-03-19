import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('mongoDb is connected')
    }).catch((error) => {
        console.log(error)
    })

const app = express();

app.listen(3001, () => {
    console.log('server is running on port 3001!')
});

app.use('/api/user', router)