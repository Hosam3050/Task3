
const express = require('express');
    const JWT = require('jsonwebtoken');

    const app =express();

    app.get('/',(req,res)=>{
        res.json({
            messge:'Done...'
        });
    });

    app.post('/login',(req,res)=>{
        const user={
            id:1,
            username:'hossam',
            email:'hosam@gmail.com'
        }
        JWT.sign({user},'secretKey',(err,token)=>{
            res.json({
                token
            })
        });

    })

    app.listen(5000,()=>console.log("server done..."))