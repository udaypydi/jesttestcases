const fs = require('fs')

const fetch = (url) => new Promise((resolve, reject) => {
  const firstQuery = url.indexOf('=')
  const firstAnd = url.indexOf('&');
  const movieName = url.substring(firstQuery + 1, firstAnd  - 1)
  // Load user json data from a file in de subfolder for mock data
  fs.readFile(`../__mockData__/${movieName}.json`, 'utf8', (err, data) => {
    if (err) reject(err);
    console.log(data);
    // Parse the data as JSON and put in the key entity (just like the request library does)
    resolve({ entity: JSON.parse(data) })
  })
})

export default fetch;
