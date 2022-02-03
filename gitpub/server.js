//Express Library
const express = require('express');

//App creation
const app = express();
const port = 3000;

//Drinks and food additon from models
const drinks = require("./models/drinks");
const food = require("./models/food");

//Initial first page
app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

//Drinks route
app.get('/drinks', (req, res) =>{
    res.render("drinks_index.ejs", {drinks: drinks
    });
});



app.get('/food', (req, res) =>{
    res.render("food_index.ejs", {food: food, drinks: drinks});
});

//Link to Specific Drinks
app.get('/drinks/:drinksIndex', (req, res) => {
    const drink = drinks[req.params.drinksIndex]
    res.render('drinks_show.ejs', {drink: drink});
});

//Link to Specific Foods
app.get('/food/:foodIndex', (req, res) => {
    const foods = food[req.params.foodIndex]
    res.render('food_show.ejs', {foods: foods});
});


//Listener
app.listen(3000, () => {
    console.log("listening");
});