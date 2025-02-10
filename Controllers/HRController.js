const axios=require("axios");
const networking=require("../config/networking.js");
module.exports={
    CoutEmployee: function(req,res){
       axios.get(networking.HR_SYSTEM+"api/v1/count/employee",{
            params:{
                token:networking.HR_SYSTEM_TOKEN
            }
        }).then((data)=>{
            console.log(data.data);
            res.status(200).json(data.data);
        });
    }
};