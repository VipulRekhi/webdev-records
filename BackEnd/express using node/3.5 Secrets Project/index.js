import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.listen(port ,()=>
{
    console.log("listening to port 3000");
})

var iscorrect=false;
app.use(bodyParser.urlencoded({extended:true}));

function check(req,res,next)
{
    var pass=req.body["password"];
    if(pass === "vipul")
    {
        iscorrect=true;
    }
    next();
}

app.use(check);

app.get("/" ,(req,res)=>
{
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/check",(req,res)=>
{
if(iscorrect)
{
    res.sendFile(__dirname+"/public/secret.html");
}
else{
    res.sendFile(__dirname+"/public/index.html");
}});