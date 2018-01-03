

module.exports = function(username){  

var request = require('request');

var baseUri = 'https://api.github.com/users/';



var options = {
  url: `${baseUri}${username}`,
  headers: {
    'User-Agent': 'request'
  }
}; //updates the http headers


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log("User Profile Details");
    console.log("----------------------------------------");
    console.log("Full Name: " + info.name);
    console.log("Location: " + info.location);
    console.log("Email Address: " + info.email);
    console.log("Public Repos: " + info.public_repos);
    console.log("Current followers: " + info.followers);
  }
} //functiion callback takes error, response and body as arguments
//if theres if no error and response statuscode equals 200 run the 
  //code info parse the json collected to a an object. 

request(options, callback);
//runs a http request updateds the header and runs a callback.      
}
 



