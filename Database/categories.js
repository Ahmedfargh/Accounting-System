const mongoose =require("mongoose");
const Schema=mongoose;
const CategorySchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    Products:{
        type:Schema.Types.Array,
    }
    
});
const CategoryModel=mongoose.model("Category",CategorySchema);
module.exports=CategoryModel;
