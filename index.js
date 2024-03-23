const express=require("express");
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT;
const PriceRoute=require("./Price");
const VolumeRoute=require("./Volume");
app.use(express.json());
mongoose.connect("mongodb+srv://rhtwatts:tihorsttaw@cluster0.p4ysawt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("connected")).catch((err)=>console.log(err));
app.use("/Price",PriceRoute);
app.use("/Volume",VolumeRoute);
app.listen(PORT || 5000,()=>{
    console.log("server running")
})