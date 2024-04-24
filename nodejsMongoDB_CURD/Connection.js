const mongoose = require('mongoose');

const dbUrl = "write your cloud or mongoDB atals full path with user id and password";
const Connection=async ()=>{
   await mongoose.connect(dbUrl)
  .then(() => {
    console.info("Connected to DB");
  }).catch((e) => {
    console.error("Error:", e);
  });

}
module.exports=Connection
