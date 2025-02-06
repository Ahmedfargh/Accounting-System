const mongoose=require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    gender:{
        type:Boolean,
        default:true,
    },
    phone:{
        type:String,
        default:true
    },
    address:{
        type:String,
        default:true,
    },
    google_id:{
        type:String
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
   