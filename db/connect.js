const mongoose = require('mongoose');
mongoose.connect(require("../utils/dbConstants").url, 
{ useNewUrlParser: true,
poolSize:10 }, (error)=>{
if(!error){
    console.log("DB connected")
}
else{
    console.log(error);
}
}
);
module.exports = mongoose;