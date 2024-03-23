const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    address: {type:String, required:true},
    name: {type:String, required:true},
    symbol: {type:String, required:true}
});

const Volume = new mongoose.Schema({
    h24: {type:Number,required:true},
    h6: {type:Number,required:true},
    h1: {type:Number,required:true},
    m5: {type:Number,required:true}
  });

  
const VolumeSchema = new mongoose.Schema({
    chainId: {type:String,required:true},
    dexId: {type:String,required:true},
    url: {type:String,required:true},
    pairAddress: {type:String,required:true,unique:true},
    baseToken: {type:TokenSchema,required:true},
    quoteToken: {type:TokenSchema,required:true},
    volume: {type:Volume,required:true},
    pairCreatedAt:{type: Date,default: Date.now},
  }
  );

  module.exports = mongoose.model('Volume', VolumeSchema);