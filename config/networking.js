const mongoose = require("mongoose");
const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/accounting_system";
const DB_connection=mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true} ).then(() => console.log('Connected!'));
