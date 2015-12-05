# upload-twitter-list
A script which converts an array of user handles into a twitter list

Built by @kordianbruck on codementor.io

## How To Use
Create your twitter list first

Make sure node is installed (https://nodejs.org/en/download/)

Create a twitter app at https://apps.twitter.com/app/new

Download the files locally

Replace the text in the server.js file with the variables from your twitter app:
- "consumerKey": "YOUR_CONSUMER_KEY",
- "consumerSecret": "YOUR_CONSUMER_SECRET",
- "accessToken": "YOUR_ACCESS_TOKEN",
- "accessTokenSecret": "YOUR_ACCESS_TOKEN_SECRET"

Change these variables: 
- owner_screen_name:"YOUR_HANDLE",
- slug:"LIST_NAME_HERE",
- screen_name:"HANDLE1,HANDLE2,HANDLE3"

Go to the containing folder and run the following command:

`node server.js`
