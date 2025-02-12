const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // You can change the port

app.use(cors());
app.use(bodyParser.json());

// API endpoint to receive form data
app.post("/submit", (req, res) => {
    console.log("Received Data:", req.body);
    res.json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});