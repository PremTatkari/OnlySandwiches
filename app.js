require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");

dbConnect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/root"));
app.use("/items", require("./routes/itemRoutes"));

app.all("*", (req, res) => {
    res.status(404).send({error: "404 Page not found"});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Server started on port " + PORT));