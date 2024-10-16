var user = "";

var express = require('express')
var exphbs = require("express-handlebars")

var port = 4000
var app = express()

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// let quoteData = require("./quoteData.json")
// console.log("== quoteData:", quoteData)

// let userData = require("./userData.json")
// console.log("== userData:", userData)

app.use(express.static('public'))

app.use(express.urlencoded({
  extended: true
}));




const fs = require("fs");

var raceData;
fetch("https://api.open5e.com/v1/races")
  .then((response) => response.text())
  .then((result) => {
    raceData = JSON.parse(result).results;

    // console.log(raceData);
    
    // const data = JSON.stringify(raceData);
    // fs.writeFile("raceData.json", data, (error) => {
    //   // throwing the error
    //   // in case of a writing problem
    //   if (error) {
    //     // logging the error
    //     console.error(error);
    
    //     throw error;
    //   } })

})
.catch((error) => console.error(error));


fetch("https://www.dnd5eapi.co/api")
  .then((response) => response.text())
  .then((result) => {
    raceData = JSON.parse(result);
    console.log(raceData).races;

    // console.log(raceData);
    
    // const data = JSON.stringify(raceData);
    // fs.writeFile("raceData.json", data, (error) => {
    //   // throwing the error
    //   // in case of a writing problem
    //   if (error) {
    //     // logging the error
    //     console.error(error);
    
    //     throw error;
    //   } })

})
.catch((error) => console.error(error));


  





app.get('/', (req, res) => {
  // Render index //
  res.status(200).render("homePage", {user: user});
})

app.get('/login', (req, res) => {
  // If already logged in, log out and go to home page //
  if (user != "") {
    user = "";
    res.status(200).render("homePage");
    return;
  }
  // Render login //
  res.status(200).render("loginPage", {user: user});
})



// quotes using layouts
app.get('/quotes', function (req, res, next) {
  let quoteArray = [];
  for ( let key in quoteData) {
    quoteArray.push(quoteData[key].category);
  }

  console.log(quoteArray);

  if (quoteArray) {
    res.status(200).render("quotePage", {
      categories: quoteArray,
      user: user
    })
  } else {
    next()
  }
})

// races page
app.get('/races', function (req, res, next) {
  res.status(200).render("racePage", {
    page: "Races",
    races: raceData
  })
})

app.get('/quotes/:category', function (req, res, next) {
  let category = req.params.category.toLowerCase()
  let quoteList = quoteData[category]
  if (quoteList) {
    console.log(quoteList);
    
    res.status(200).render("quoteCategoryPage", {
      category: quoteList.category,
      quotes: quoteList.quote_list,
    })
  } else {
    next()
  }
});

app.get("*", function (req, res, next) {
  res.status(404).render("404", { url: req.originalUrl })
})



app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log("== Server listening on port", port)
})


// Takes input from the login form
app.post('/login', function (req, res, next) {

  // Username and Password input
  let username = req.body.username;
  let password = req.body.password;

  // Loops throught users in userData.json
  for (let key in userData) {

    // if username is found
    if (key == username) {

      // check if password is correct
      if (userData[key].password == password) {
        // if password matched, set user and go to home page
        user = key;
        res.status(200).render("homePage", {user: user});
        return;
      }

      // If password is not found, display error
      var passwordError = "Error: Password is incorrect";
      res.status(200).render("loginPage", { usernameError : "", passwordError: passwordError });
      return;
    }
  }

  // If username is not found, display error
  var usernameError = "Error: Username does not exist";
  res.status(200).render("loginPage", { usernameError: usernameError, passwordError: "" });
});