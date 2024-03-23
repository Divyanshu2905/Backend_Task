const mongoose = require('mongoose');

//Defining SUb Schemas
const TokenSchema = new mongoose.Schema({
  address: {type:String, required:true},
  name: {type:String, required:true},
  symbol: {type:String, required:true}
});
const PriceChangeSchema = new mongoose.Schema({
  m5: {type:Number,required:true},
  h1: {type:Number,required:true},
  h6: {type:Number,required:true},
  h24: {type:Number,required:true}
});

//Main Price Schema
const PriceSchema = new mongoose.Schema({
  chainId: {type:String,required:true},
  dexId: {type:String,required:true},
  url: {type:String,required:true},
  pairAddress: {type:String,required:true,unique:true},
  baseToken: {type:TokenSchema,required:true},
  quoteToken: {type:TokenSchema,required:true},
  priceNative: {type:Number,required:true},
  priceUsd: {type:Number,required:true},
  priceChange: {type:PriceChangeSchema,required:true},
  pairCreatedAt:{type: Date,default: Date.now}
}
);

//Exporting Schemas
module.exports = mongoose.model('Price', PriceSchema);
