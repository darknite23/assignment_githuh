"use strict"
var profile = require("./profile");
var repos = require("./repos");
var stars = require("./stars");



var command = process.argv[2];
var username = process.argv[3];


    if(command === "profile"){
        console.log(`Thank you for using the profile command.`);
        console.log(`Gathering Profile Details for: ${username}`);
        profile(username);
    } else if(command === "repos"){
        console.log(`Thank you for using the repos command.`);
        console.log(`Gathering repos for: ${username}`);
        repos(username);
    } else if(command === "stars"){
        console.log(`Thank you for using the stars command.`);
        console.log(`Gathering repos for: ${username}`);
        stars(username);
    } else {
      console.log("Can't find your command!");
    }






    
      






