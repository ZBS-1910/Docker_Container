const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/home',(req, res)=>{
    return res.json({message:'homecoming'});

})
app.get('/about',(req, res)=>{
    return res.json({
        message:"about user"
    })

});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.port}`);
    });