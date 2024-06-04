import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://helloworld32130:Jcwdlove@cluster0.i31aywg.mongodb.net/food-del").then(() => console.log("Db Connected"));
};