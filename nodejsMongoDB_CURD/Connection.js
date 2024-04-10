const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://demoDatabase:<Your DB Password>@cluster0.qeav4yb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Connection=async ()=>{
   await mongoose.connect(dbUrl)
  .then(() => {
    console.info("Connected to DB");
  }).catch((e) => {
    console.error("Error:", e);
  });

}
module.exports=Connection
