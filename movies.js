async function getJsonObjAsync() {
  const response = await fetch('movies.json')
  const movie = await response.json()

  const movieList = document.querySelector('#container')

  movie.forEach(element => {
    const movieTitle = document.createElement('h3')
    movieTitle.textContent = element.title

    const reviewNum = document.createElement('p')
    reviewNum.textContent = element.review.reviewNumber

    const reviewCount = document.createElement('p') 
    reviewCount.textContent = 'Voted: ' + element.review.reviewCount

    const releaseDate = document.createElement('p')
    releaseDate.textContent = 'Release date: ' + element.releaseDate

    const discription = document.createElement('p')
    discription.innerHTML = 'Discription:<br>' + element.discription

    const genres = document.createElement('p')
    genres.textContent = `Genres: ${element.genres}`

    const director = document.createElement('p')
    director.textContent = `Director: ${element.director}`

    const actorsTitle = document.createElement('h4')
    actorsTitle.textContent = `Main actors:`

    const actorsList = document.createElement('ul')

    element.mainActors.forEach(actor => {
      const actorsItem = document.createElement('li')
      actorsItem.textContent = actor
      actorsList.append(actorsItem)
    })

    movieList.append(movieTitle, reviewNum, reviewCount, releaseDate, discription, genres, director, actorsTitle, actorsList)

    console.log(element.genres)
  });

}

getJsonObjAsync()