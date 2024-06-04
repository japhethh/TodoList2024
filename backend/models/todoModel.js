import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
  name:{type:String,required:true},
  completed:{type:Boolean,default:false},
  createdAt:{type:Date,defaulte:Date.now}
});

const listSchema = new mongoose.Schema({
  name:{type:String,required:true},
  items:[itemSchema],
  createdAt:{type:Date,default:Date.now}
});

const userSchema = new mongoose.Schema({
  name:{type:String,required:true,unique:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  list:[listSchema]
})

const User = mongoose.model("Todo",userSchema);

export default User;




// const todoSchema = new mongoose.Schema({
//     name:{type:String,required:true},

//     complete:{type:Boolean,default:false,required:true}
// },{
//   timestamps:true
// })

// const todoModel = mongoose.models.todo ||  mongoose.model("todo",todoSchema);

// export default todoModel