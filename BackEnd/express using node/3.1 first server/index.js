import express from "express";
const app=express();
app.get("/",(req,res) =>
{
    res.send("<h1>hello world<h1>");
});
app.get("/about",(req,res) =>
{
    res.send("<h1>hello this is about me<h1>");
});
app.get("/contact",(req,res) =>
{
    res.send("<h1>hello this is my contact number<h1>");
});
app.get("/lumba",(req,res) =>
{
    res.send("<h1>my cat name is lumba</h1>");
});
app.listen(3000,()=>
{
    console.log("server running on port 3000");
});