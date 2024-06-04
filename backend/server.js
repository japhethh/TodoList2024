import {connectDB} from './config/db.js';
import express from 'express'
import cors from 'cors'
import "dotenv/config"
// import todoRouter from './routes/todoRoute.js';
import userRouter from './routes/userRoute.js';

const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// app.use("/api/todo",todoRouter)
app.use("/api/user",userRouter)

// api endpoint
app.get("/", (req,res) => {
  res.send("<h2 className='bg-red-500 text-blue-500'>Api is Working</h2>")
});

app.listen(port, () => {
  console.log(`Server started in http://localhost:${port}`);
});

