const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// API routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/blogs", (request, response) => {
  response.send("Hello from blogs");
});

app.listen(5174, () => {
  console.log("Listening on port 5174");
});