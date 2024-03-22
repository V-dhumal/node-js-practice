import express from 'express';

const app=express();
app.use(express.json());

const PORT=5000;
app.get('/order/food' ,(req,res)=>{
    const{menu, price, quantity}=req.query;
    console.log(`Headers:`, req.headers);

    const totalPrice=parseInt(price)*parseInt(quantity);
    res.json({
        message:`You have ordered ${quantity} ${menu}`,
        bill:`Your total bill is ${totalPrice}`
    })
}
)

app.get('/food/:type', (req,res)=>{
     
   const {type}=req.params  ;

   if(type=="veg"){
    return res.json({
        message:'You have ordered veg food'
    })
   }else{
    return res.json({
        message:'you have ordered non-veg food'
    })
   }

   
})
app.post('/user', (req,res)=>{
    const{id,name, collegeName, yearofstudy}=req.body;


    res.json({
        id:`${id}`,
        message:`Your Name is ${name} and collge name is ${collegeName} and the year of study become ${yearofstudy}`
    })
})

app.listen(5000,()=>{
    console.log('server is running ');
})