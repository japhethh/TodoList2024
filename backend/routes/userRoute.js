import { registerUser,getUser,addListToUser,addItemToList,getList } from "../controllers/userController.js";
import express from 'express'
import multer from 'multer'
import auth from '../middleware/auth.js'
const userRouter = express.Router();

const storage = multer.diskStorage({
  destination:"./uploads",
  filename:(req,file,cb) => {
    return cb(null,`${Date.now()}${file.originalname}`);
  }
})

const upload = multer({storage:storage})


userRouter.post("/register",upload.single("image"),registerUser);
userRouter.get("/getUser",getUser);
userRouter.post("/addList",addListToUser);
userRouter.post("/addItem",addItemToList);
userRouter.get("/getList",auth,getList)

export default userRouter