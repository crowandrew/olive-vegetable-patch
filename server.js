// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arrays
// ===========================================================
const tables = [
  {
    name: "Bob",
    phone: "Number",
    email: "bobemail@email.com",
    uniqueId: "bobseats"
  }
];

const waitlist = [
  {
      name: "Bob",
      phone: "Number",
      email: "bobemail@email.com",
      uniqueId: "bobseats"
  }
];

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