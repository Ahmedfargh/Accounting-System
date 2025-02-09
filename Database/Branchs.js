const mongoose=require("mongoose");
const schema = mongoose;
const BranchSchema=new schema({
    address:{
        type:String,
        required:true,
    },
    manager_hr_number:{
        type:Number,
        default:null,
    },
    employees:{
        type:Array,
        default:[],
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const branchModel=mongoose.model("branchs",BranchSchema);
module.exports=branchModel;