const express = require('express');
const app =  express();
const {products} = require('./02-express-tutorial/data');

app.get('/',(req,res) =>{
    res.send('<h1> Home Page </h1> <a href="/api/products">Products</a>');
})
app.get('/api/products',(req,res) =>{
    const newProducts = products.map((product) => {
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProducts);
})
app.get('/api/products/:productID',(req,res) =>{
    const {productID} = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
})

app.get('/api/v1/query',(req,res) =>{
    const {search,limit} = req.query;
    let sortedProducts = [...products]; // the spread operator is used to create a shallow copy of the products array

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){
        // res.status(200).send('No Products Matched Your Search');
        return res.status(200).json({success:true,data:[]});// writing return here to avoid headers already sent error
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000,() => {
    console.log('Server listening on port 5000 ....');
})