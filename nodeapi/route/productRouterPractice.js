let express = require("express");
let router = express.Router({}), //router module only
ProductDataModel = require("../datamodel/ProductDataModelPractice");

//user signin signup api
router.post("/api/addProduct", (req, res)=>{ //localhost:9090/product/api/addProduct
    console.log("data ", req.body); //user object that user creates entry
    setTimeout(()=>{
        ProductDataModel.findOne({productName: req.body.productName}, (error, data)=>{
            if (error) {
                console.log("error adding product", error);
                res.send("Error Occurred");
            } else if(data) { //if data returned means user is already present
                res.send(data); //data will be the user object
            } else {
                let productDataObject = new ProductDataModel(req.body); //mapping data from req.body to schema

                productDataObject.save((err, newProductData)=>{ //error first callback
                    if (err) {
                        console.log("error in adding product", err);
                        res.send("Error in adding product");
                    } else {
                        console.log("success");
                        res.send(newProductData); //if user gets successfully created we will get the mongodb unique id
                    }
                })
            }
        });
    },3000)
});


module.exports = router;