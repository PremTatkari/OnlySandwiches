const express = require("express");
const path = require("path")

const app = express();

// app.use(express.static(path.resolve(__dirname, "frontend/public")));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend/public", "index.html"));
// });

// app.get("/api", (req, res) => {
//     res.json({message: "Hello from server"});
// });

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
    res.status(404).send({error: "404 Page not found"});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Server started on port " + PORT));