import todoModel from "../models/todoModel.js";

const todoAdd = async (req,res) => {
    const {name} = req.body;
    const newTodo = new todoModel({
      name:name,
    });
    try {
      await newTodo.save();
      res.json({success:true,message:"Added"})
    } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error"})
    }
}



const todoGet = async (req,res) => {

}

export {todoAdd,todoGet}