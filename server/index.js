import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postRoutes from './routes/postRoutes.js'

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/post', postRoutes)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`);
});