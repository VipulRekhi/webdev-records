import express from "express";
const app =express();
const port =3000;

app.get("/",(req,res)=>
{
    const d =new Date();
    let day =d.getDay()
    console.log(day);
    let weekday="Weekday";
    let advice="hey its time to grind";
    if(day ===0 || day ===6)
    {
        let weekday="WeekEnd";
        let advice="hey its time to have Fun";

    }
    res.render("index.ejs",{
        dayselector:weekday,
        adv:advice
    });
});

app.listen(port , ()=>
{
    console.log(`you are listening to ${port}`);
});