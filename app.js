const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.resolve(__dirname + "/recipe-app/public")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/recipe-app/public", "index.html"));
});

app.get("/api", (req, res) => {
    res.json({message: "Hello from server"});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log("Server started on port " + PORT));