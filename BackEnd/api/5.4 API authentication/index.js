import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "vipul";
const yourPassword = "1234";
const yourAPIKey = "fd10a2cd-9e10-4fc3-8735-bddfc50ccaf5";
const yourBearerToken = "7c0e29f0-9eb4-4624-9ffc-9404a620d09d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const noA = await axios.get(API_URL + "random");
    res.render("index.ejs",
      {
        content: JSON.stringify(noA.data)
      }
    )
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "all?page=2",
      {
      auth:{
      username : yourUsername,
      password : yourPassword,
      }
    }
    );
    res.render("index.ejs",
      {
        content: JSON.stringify(result.data)
      }
    );
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "filter",
      {
      params:{
      score : 5,
      apiKey : yourAPIKey,
      }
    }
    );
    res.render("index.ejs",
      {
        content: JSON.stringify(result.data)
      }
    );
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "secrets/2",
      {
      headers:{
        Authorization:`Bearer ${yourBearerToken}`
      }
    }
    );
    res.render("index.ejs",
      {
        content: JSON.stringify(result.data)
      }
    );
  }
  catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
