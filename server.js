const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();
const uri = process.env.URI;

// Test Route for production build
app.get("/api/test", (req, res) => {
  res.send("Congrats.  It worked");
})

//MiddleWare configuring body parsing for ajax requests
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adds api and view routes 
app.use(routes);
// Connects to mongodb
mongoose.connect(process.env.MONGODB_URI || uri,{
  useCreateIndex: true,
  useNewUrlParser: true

})
// Send every request to the React app

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"),
  (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
