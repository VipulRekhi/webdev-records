// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express"
import axios from "axios"
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", async (req, res) => {
    try 
    {
        const result=await axios.get("https://secrets-api.appbrewery.com/random");
        const r_data=result.data;
        const sec= r_data.secret;
        const user=r_data.username;
        res.render("index.ejs", 
            {
                secret:sec,
                user:user
            });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.listen(port,()=>
{
    console.log(`listening to ${port}`);
})
