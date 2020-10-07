// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;;


// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.send("Welcome to Olive Vegetable Patch!");
  });


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});