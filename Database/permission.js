const mongoose=require("mongoose");
const {Schema}=mongoose;

const permissionScheama=new Schema({
    name:{
        type:String,
        required:true
    }
});
const permission=mongoose.model("permissions",permissionScheama);
module.exports=permission;
