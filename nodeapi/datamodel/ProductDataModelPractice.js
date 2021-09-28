let mongooseObj = require("mongoose"), 
schemaObj = mongooseObj.Schema; 

mongooseObj.connect("mongodb://127.0.0.1/mernstack7"); 

let ProductSchema = new schemaObj({
    productName: {type:String, required:true},
    price: {type:String, required:true},
    rating: String,
    comments: String
},
{
    versionKey: false 
});

let ProductModel = mongooseObj.model("product",ProductSchema);
module.exports = ProductModel;