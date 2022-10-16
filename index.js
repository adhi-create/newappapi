const express = require('express');
const app = express();
var cors = require('cors');

app.get ('/',(req,res)=>{
    res.send('<h1>hello</h1>')
})

const products =[
    {
        id:1,
        name:"mi"
    },
    {
        id:2,
        name:"realme"
    },
    {
        id:3,
        name:"iphone"

    }

    
]



app.use(cors({
    origin: 'https://wondrous-lily-439b07.netlify.app',credentials:true
}));


app.get ('/products',(req,res)=>{
    res.json(products)
})


app.get ('/products/:id',(req,res)=>{
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.send(newData);
})


app.listen(process.env.PORT ,()=>console.log('server running ...'));



