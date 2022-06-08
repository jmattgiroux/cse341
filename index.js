// Heroku Test Deployment
// Resource used: https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku/

const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Jared Giroux");

});

app.listen(PORT, () => {
    console.log(`Page running on port ${PORT}`);

});