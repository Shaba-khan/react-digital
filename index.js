const express= require('express');
const app=express();

app.get('/',(req,res)=>{
	res.send({hy:'shaba'});
})

app.listen(5000)