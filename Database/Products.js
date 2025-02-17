const mongoose=require("mongoose");
const {Schema}=mongoose;
const Products=new Schema({
    name:{
        type:String,
        required:true,
    },
    buy:{
        type:Number,
        required:true,
    },
    suppliers:{
        type:Array,
        required:false,
    },
    sell_price:{
        type:Number,
        required:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required:false
    },
    
});
const ProductModel=mongoose.model("Products",Products);
module.exports=ProductModel;