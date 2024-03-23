const router=require("express").Router();
const Pair=require("./PriceSchema");

//Get Request Parameterised
router.get("/:id",async(req,res)=>{
    try{
        const data=await Pair.findOne({pairAddress:req.params.id});
        if (!data ) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get Request Un-Parameterised
router.get("/",async(req,res)=>{
    try{
        const data=await Pair.find();
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
})

//Post Request
router.post("/",async(req,res) => {
    const newData=new Pair(req.body);
    try{
        const savedData= await newData.save();
        res.status(200).json(savedData);
    }catch(err){
        res.status(500).json(err);
    }
})

//Delete Request
router.delete("/:id", async(req,res) => {
    try{
        const data=await Pair.findOne({pairAddress:req.params.id});
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        try{
            await Pair.findOneAndDelete({pairAddress:req.params.id});
            res.status(200).json("Data Deleted"); 
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//Update Request
router.put("/:id", async(req,res) => {
    try{
        const data=await Pair.findOne({pairAddress:req.params.id});
        if (!data ) {
            return res.status(404).json({ message: 'Data not found' });
        }
        try{
            const updatedPair = await Pair.findOneAndUpdate(
                { pairAddress: req.params.id },
                { $set: req.body },
                { new: true } 
            );
            res.status(200).json(updatedPair);
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;


