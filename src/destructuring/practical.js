/* jshint esnext: true */
var colors = require('colors');
var request = require('request');
console.log('destructuring/practical.js <apiKey>'.gray);

// Let's grab some JSON from an API and use destructuring
// to get at the parts we're interested in.
// To use this example, provide an API key as an argument,
// e.g. `node destructuring/practical.js 0123456789abcdef`

if(process.argv.length < 3) {
  console.error('You need a Forecast.io API key to use this example!');
  console.log('https://developer.forecast.io/'.gray);
  process.exit(1);
}

var apiKey = process.argv[2];

// See the templateStrings folder for more on this!
var requestUrl = `https://api.forecast.io/forecast/${apiKey}/39.952222,-75.1641667`;

request(requestUrl, function(err, response) {
  if(err) {
    console.error(err);
    process.exit(0);
  }

  // Parse the body into JSON.
  var body;
  try {
    body = JSON.parse(response.body);
  } catch(e) {
    console.error("Oops! Couldn't parse the response body.");
    process.exit(0);
  }

  // Now we have an object to get properties from.
  var { currently: { summary, temperature } } = body;

  console.log('Philadelphia'.bold);
  console.log('Summary:'.red, summary);
  console.log('Temperature:'.red, Math.round(temperature) + '°F');
});