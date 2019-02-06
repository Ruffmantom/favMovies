const fs = require('fs')
const https = require('https')

const ids = [
  9273,
  2109,
  473,
  2502
]

let movies = []

ids.forEach(id => {
  https.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=d4791e4e44b5fb06ea9a580538d10686', (resp) => {
    let data = ''
    resp.on('data', (chunk) => {
      data += chunk;
    })
    resp.on('end', () => {
      movies.push(JSON.parse(data));
    })
  })
})

const compareLengths = setInterval(() => {
  if (ids.length === movies.length) {
    fs.writeFileSync('movies.json', JSON.stringify(movies))
    clearInterval(compareLengths)
  }
  console.log('Movies remaining: ', ids.length - movies.length)
}, 500);