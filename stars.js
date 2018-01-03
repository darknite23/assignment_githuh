

module.exports =  function(username){  
var request = require('request');

var baseUri = 'https://api.github.com/users/';



var options = {
  url: `${baseUri}${username}/starred`, 
  headers: {
    'User-Agent': 'request'
  }
}; //updates the http headers


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
          var stars = info;
          console.log('---------------------------------------');
          console.log('Here are the repos starred by the user ');
          stars.forEach(star => {
            console.log('Owner: ' + star["owner"]["login"]);
            console.log('Name: ' + star["name"]);
            console.log('Description: ' + star["description"]);
            console.log(' ');
          });
  }
} 


request(options, callback);
}

      