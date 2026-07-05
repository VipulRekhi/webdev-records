import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client(
  {
    user: "postgres",
    password: "worldpass",
    port: 5432,
    database: "secret",
    host: "localhost"
  }
);

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {
  res.render("secrets.ejs");
});
app.post("/register", async (req, res) => {
  let user = req.body.username;
  let pass = req.body.password;
  try {
    const check = await db.query("select password from users where email=$1", [user]);
    if (check.rows.length > 0) {
      res.send("user aldready exists try logging in");
    }
    else {
      const result = await db.query("insert into users(email,password) values($1,$2)", [user, pass]);
    }
    console.log("result.data");
    res.render("secrets.ejs");
  } catch (err) {
    console.log(err);
  }

});

app.post("/login", async (req, res) => {
  let user = req.body.username;
  let pass = req.body.password;
  try{
  const check = await db.query("select password from users where email=$1", [user]);
  console.log(check.rows[0].password);
  if (pass == check.rows[0].password) {
    res.redirect("/secrets")
  }}
  catch(err)
  {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
