let express = require("express");
let router = express.Router({}),
CartDataModel = require("../DataModel/CartDataModel");

//product api's
router.post('/api/addToCart',(req, res)=>{
    console.log("product data ", req.body);

    let CartObject = new CartDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    CartObject.save((err, newProductData)=>{ //error first callback
        if (err) {
                res.send("Error in product saving");
        } else {
                res.send(newProductData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

// router.get('/api/getCart',(req, res)=>{
//     CartMDataModel.find((err, products)=>{ //error first callback
//         if (err) {
//                 res.send("Error in getting products");
//         } else {
//                 res.send(products);
//         }
//     })
// })

module.exports = router;