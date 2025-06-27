import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique:true},
    password: {type:String, required: true},
    cartData: {type: Object, default:{}}
},{minimize:false})
// why minimize -- mongoose neglect when there ia one empty object that data will not display in DB. using minimize:false data will be displayed.

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;