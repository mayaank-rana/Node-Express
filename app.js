const express=require('express')
const app=express()
const {products}=require('./data')


app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href ="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    
    const newProducts=products.map((products)=>{
        const {id,name,image}=products;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res)=>{
    // console.log(req);
    // console.log(req.params)
    const productId=req.params.productID;
    console.log(productId)
    const singleProduct=products.find((products) => products.id === Number(productId))

    if(!singleProduct){
        res.send("no product found")
        res.end()
    }//abc
    res.json(singleProduct)
})


app.listen(5000,()=>{
    console.log('server is listening at port 5000')
})