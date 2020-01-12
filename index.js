require('dotenv').config()




const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });
  
client.post("statuses/update", { status: "Welcome to the party pal" }, function(
  error,
  tweet,
  response
) {
  if (error) throw error;
  console.log("error error");
  console.log(response);
  
});

