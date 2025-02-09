const mongoose  = require("mongoose");

const schema=mongoose;
const EmployeeSchema= new schema({
    name:{
        type:String,
        required:true
    },
    birth_date:{
        type:Date,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    join_date:{
        type:String,
        required:true,

    },
    salarys:{
        type:Array,
        default:[],
    },
    HR_SYSTEM_ID:{
        type:Number,
        required:true,
    },
});
const EmmployeeModel=mongoose.model("employees",EmployeeSchema);
module.exports=EmmployeeModel;
