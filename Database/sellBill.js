const mongoose=require("mongoose");
const schema=mongoose;
const sellbuyScheam=new schema({
    Product:{
        type:schema.Types.ObjectId,
        ref:"Products",
    },
    quantity:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        default:0,
    },
    before_discount:{
        type:Number,
        required:true,
    },

    after_discount:{
        type:Number,
        required:true,
    }
});
const sellbuymodel=mongoose.model("sellbll",sellbuyScheam);
module.exports=sellbuymodel;