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


//directs t the home page (API)
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//directs to the reservation page (API)
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//directs to the tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


//adding new reservation to "tables" page (Post)
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// adding to "Wait List"
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});



// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});