"use strict"
var profile = require("./profile");
var repos = require("./repos");
var stars = require("./stars");

var username;
var command; //command


function grabber(x){
  var index = process.argv.indexOf(x);
  //if "profile" is in the process store it's position as index. 
  if(index === -1){
     return null;
  } else {
    command = process.argv[index];
     return process.argv[index + 1];
  }
} //it updates the variable username
//takes a username input updates username




var profileTrue = grabber("profile"); //true
var reposTrue = grabber("repos");
var starsTrue = grabber("stars");



    if(command === "profile"){
      username = profileTrue;
        console.log(`Thank you for using the profile command.`);
        console.log(`Gathering Profile Details for: ${username}`);
        profile(username);
    } else if(command === "repos"){
         username = reposTrue;
        console.log(`Thank you for using the repos command.`);
        console.log(`Gathering repos for: ${username}`);
        repos(username);
    } else if(command === "stars"){
        username = starsTrue;
        console.log(`Thank you for using the stars command.`);
        console.log(`Gathering repos for: ${username}`);
        stars(username);
    } else {
      console.log("Can't find your command!");
    }






    
      






