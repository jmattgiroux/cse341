// Heroku Test Deployment
// Resource used: https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku/

const app = require("express")();
const PORT = process.env.PORT || 8080;

app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);

});