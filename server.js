//Include the node module
var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "YOUR_CONSUMER_KEY",
    "consumerSecret": "YOUR_CONSUMER_SECRET",
    "accessToken": "YOUR_ACCESS_TOKEN",
    "accessTokenSecret": "YOUR_ACCESS_TOKEN_SECRET",
    "callBackUrl": "http://localhost:3000/"
}

//Init the twitter api client with the api key
var twitter = new Twitter(config);

//Callback functions
var error = function (err, response, body) {
    console.log(err)
};
var success = function (data) {
    console.log(data); 
   
};


//Add members to list via slug/list name 
twitter.listAddMembers({
    owner_screen_name:"YOUR_HANDLE",
    slug:"LIST_NAME_HERE",
    screen_name:"HANDLE1,HANDLE2,HANDLE3"
},error,success);

//Add members to list via list_id
/*twitter.listAddMembers({
    list_id:227857378,
    screen_name:"StartupJuncture,revenantarena,indiegamepr"
},error,success);*/
