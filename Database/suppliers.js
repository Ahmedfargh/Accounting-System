const mongoose=require("mongoose");
const schema=mongoose;
const supplier_schema=new schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    supplies:{
        type:Array,
        default:[],
    },
    bills:{
        type:Array,
        default:[],
    },
    address:{
        type:String,
        default:null,
    },
    email:{
        type:String,
        default:null
    },
    status:{
        type:Boolean,
        default:true,
    }
});
const supplierModel=mongoose.model("supplier",supplierModel);
module.exports=supplierModel;
