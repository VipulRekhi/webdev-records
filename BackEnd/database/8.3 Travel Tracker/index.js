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
  db.end();
  res.render("index.ejs",
  {
    countries:countrylist,
    total:countrylist.length
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
