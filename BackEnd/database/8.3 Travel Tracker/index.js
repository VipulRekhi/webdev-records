import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const db=new pg.Client(
  {
    user:"postgres",
    host:"localhost",
    database:"world",
    password:"worldpass",
    port:5432
  }
);

db.connect();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("select country_code from visited_countries");
  let countrylist=[];
  result.rows.forEach((country)=>
  {
  countrylist.push(country.country_code);
  }
);
  
  res.render("index.ejs",
  {
    countries:countrylist,
    total:countrylist.length
  });
});

app.post("/add", async (req,res)=>
{
  const new_country = req.body.country;
  const result= await db.query("select country_code from countries where country_name = $1",[new_country]);
  const data = result.rows[0].country_code;
  console.log(data);
  await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      data
    ]);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
