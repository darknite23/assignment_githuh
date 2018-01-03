

module.exports = function(username){ 
var request = require('request');

var baseUri = 'https://api.github.com/users/';

function parseDate(str_date) {//parse turn data into a format you want.
    //format date like "Tue Nov 14, 2017 12:25:52"
    return new Date(Date.parse(str_date));  
  }

function sortObject(obj) {  //create a new object of the inputted object in a decesending order.
    return Object.keys(obj).sort().reverse().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  }


var options = {
  url: `${baseUri}${username}/repos`, 
  headers: {
    'User-Agent': 'request'
  }
}; //updates the http headers to grab the repos 


function callback(error, response, body) { //callback function
  if (!error && response.statusCode == 200) {
      //body is an array of objects. 
    var repos = JSON.parse(body); 
      //parse the data to manageable objects
        
        var sortingRepos = {};
        //empty obj
        console.log(`Here are the repos by the user..`);
        repos.forEach(repo => {//for each repo obj run the function below
                        sortingRepos["created_at"] = repo["created_at"];
                        sortingRepos["updated_at"] = repo["updated_at"];
                        sortingRepos["name"] = repo["name"];
                        sortingRepos["description"] = repo["description"];
        sortingRepos = sortObject(sortingRepos);
                    console.log('---------------------------------------');
                    console.log('Name: ' + sortingRepos["name"]);
                    console.log('Description: ' + sortingRepos["description"]);
                    console.log('Date Created: ' +  parseDate(sortingRepos["created_at"]));
                    console.log('Date Updated: ' +  parseDate(sortingRepos["updated_at"]));
        });   
  }
} //functiion callback takes error, response and body as arguments

request(options, callback);
}


