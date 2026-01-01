import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup =  async (req,res)=>{
    const {fullName, email,password} =req.body
   try {
    //hash password
    if(password.length < 6){
        return res.status(400).json({
            message : "password must be at least 6 character"
        });
        const user = await User.findOne({email})
        if(user) return res.status(400).json({message :"Eamil already exists"})
    }
const salt = await bcrypt.genSalt(10)

const hashedPassword = await bcrypt.hash(password,salt)

const newUser = new User({
    fullName,
    email,
    password : hashedPassword
})
if(newUser){

}else{

   
}
   } catch (error) {
    
   }
};

export const login = (req,res)=>{
    res.send("login route");
};

export const logout = (req,res)=>{
    res.send("logout route");
};