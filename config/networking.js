const mongoose = require("mongoose");
const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/accounting_system";
const HR_SYSTEM="http:/localhost:8000/";
const HR_SYSTEM_TOKEN="40f5nKmm7gysLz1KVZaY0AYtlqWdesXQ4hqRSn4mN6lkv06yjKNkjIcY5j11aOa5";
const DB_connection=mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true} ).then(() => console.log('Connected!'));
module.exports={
    connection:DB_connection,
    HR_SYSTEM:HR_SYSTEM,
    HR_SYSTEM_TOKEN:HR_SYSTEM_TOKEN
}