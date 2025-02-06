const mongoose=require("mongoose");
const { Schema } = mongoose;

const rolesScheam=new Schema({
    name:{
        type:String,
        required:true
    },
    Permissions:{
        type:Array,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    createdAt:{
        type:Date,
        required:true,

    }
});
const roles=mongoose.models("roles",rolesScheam);
module.exports=roles;

