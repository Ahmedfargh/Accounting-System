const mongoose  = require("mongoose");
const schema = mongoose;
const billContent=new schema({
    sellBil:{
        type:Array,
        required:true,
    },
    total_before_offers:{
        type:Number,
        required:true,
    },
    total_after_offers:{
        type:Number,
        required:true,
    }
});
const sellsSchema=new schema({
    cacher:{
        type:Number,
        default:0,

    },
    branch:{
        type:schema.Types.ObjectId,
        ref:"branchs"
    },
    data:{
        type:billContent,
    },
    Date:{
        type:Date,
        default:Date.now,
    }
});
const sellsModel=mongoose.model("sellCollection",sellsSchema);