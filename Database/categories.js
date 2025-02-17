const mongoose =require("mongoose");
const {Schema}=mongoose;
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
        default:null,
    }
    
});
const CategoryModel=mongoose.model("categories",CategorySchema);
module.exports=CategoryModel;
