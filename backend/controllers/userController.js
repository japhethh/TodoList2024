  import UserModel from "../models/todoModel.js";
  import validator from "validator";
  import jwt from "jsonwebtoken";
  import bcrypt from "bcrypt";
  const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const exists = await UserModel.findOne({ email });
      if (exists) { 
        return res.json({ success: false, message: "User already exists" });
      }

      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email",
        });
      }

      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a strong password",
        });
      }

      const hash = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, hash);

      const newUser = new UserModel({
        name: name,
        email: email,
        password: hashPassword,
      });

      try {
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true,token });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
      }
    } catch (error) {}
  };

  const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
      const user = await UserModel.findOne({email});
      if(!user){
        return res.json({success:false,message:"User Doesnt Exist"})
      }

      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch){
        return res.json({success:false,message:"Invalid Credentials"})
      }
      const token = createToken(user._id);
      res.json({success:true,token,message:"Login Successful"})
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"});
    }
  }

  const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
  }


  const getUser = async (req, res) => {
    const {userId} = req.body;
    try {
      const user = await UserModel.findById(userId);
      res.json({ success: true,message:"jtangina", user });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };

  const addListToUser = async (req, res) => {
    const { userId, listName } = req.body;
    try {
      const user = await UserModel.findById(userId);
      user.list.push({ name: listName });
      await user.save();
      console.log("List added:", user);
      res.json({ success: true, message: "List added successfully" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };

  // Function to add a new item to a list
  const addItemToList = async (req, res) => {
    const { userId, listId, itemName } = req.body;
    try {
      const user = await UserModel.findById(userId);
      const list = user.list.id(listId);
      list.items.push({ name: itemName });
      await user.save();
      console.log("Item added:", user);
      res.json({ success: true, message: "Item added successfully" });
    } catch (err) {
      console.error("Error adding item:", err);
      res.json({ success: false, message: "Error adding item" });
    }
  };

  const getList = async (req,res) => {
    const {userId} = req.body;
      const user = await UserModel.findById(userId);
      try {
        res.json({success:true,user})
        console.log(user)
      } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
      }
  }

  export { registerUser, getUser, addListToUser, addItemToList, getList,loginUser };
