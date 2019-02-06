const request = new XMLHttpRequest()
request.open('GET', 'data.json', true)
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const movies = JSON.parse(request.responseText)

    movies.forEach(movie => {
      const div = document.createElement('div')
      div.className = 'movie'

      // const image = document.createElement('img')
      const image = document.createElement('div')
      image.alt = movie.title
      image.className = 'img'
      // image.src = movie.image
      image.style.backgroundImage = 'url('+ movie.image +')'
      div.appendChild(image)

      const title = document.createElement('h1')
      title.innerText = movie.title +' ('+ movie.year +')'
      div.appendChild(title)

      //const button = document.createElement('button')
      // THinking of how i can add buttons in the divs for like "Click here for run times" "click here for more info" 

      document.body.appendChild(div)
    })
  }
}
request.send()