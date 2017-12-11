export class Movies {
  constructor (container, data) {
    this.template(container, data)
    this.setMovies(data)
    this.filterThriller(data)
    this.filterDrama(data)
    this.reset(data)
  }

  template (container) {
    let moviesItem = `
      <ul class="movies-container__list"></ul>
    `
    container.innerHTML = moviesItem
  }

  setMovies (data) {
    data.forEach(movie => {
      let movies = document.createElement('li')
      let galleryContent = `
          <h2 class="movies-item__title">${movie.title}</h2>
          <p class="movies-item__director"> <b> Director: </b> ${movie.director}</p>
          <p class="movies-item__category"><b>Category: </b>${movie.category}</p>
          <img class="movies-item__image" src="${movie.image}">
          <div class="movies-item__info">
            <p class="movies-item__year"><b> Year: </b> ${movie.year}</p>
            <p class="movies-item__stars"> <b>Stars: </b>${movie.starts}</p>
          </div>
      `
      movies.classList.add('movies-item')
      movies.innerHTML = galleryContent
      document.querySelector('.movies-container__list').appendChild(movies)
    })
  }

  filterDrama (data) {
    document.querySelector('.thriller').addEventListener('click', e => {
      e.preventDefault()
      document.querySelector('.movies-container__list').innerHTML = ''
      data.filter(movie => {
        if (movie.category === 'Thriller') {
          let movies = document.createElement('li')
          let galleryContent = `
            <h2 class="movies-item__title">${movie.title}</h2>
            <p class="movies-item__director"> <b> Director: </b> ${movie.director}</p>
            <p class="movies-item__category"><b>Category: </b>${movie.category}</p>
            <img class="movies-item__image" src="${movie.image}">
            <div class="movies-item__info">
              <p class="movies-item__year"><b> Year: </b> ${movie.year}</p>
              <p class="movies-item__stars"> <b>Stars: </b>${movie.starts}</p>
            </div>
          `
          movies.classList.add('movies-item')
          movies.innerHTML = galleryContent
          document.querySelector('.movies-container__list').appendChild(movies)
        }
      })
    })
  }

  filterThriller (data) {
    document.querySelector('.drama').addEventListener('click', e => {
      e.preventDefault()
      document.querySelector('.movies-container__list').innerHTML = ''
      data.filter(movie => {
        if (movie.category === 'Drama') {
          let movies = document.createElement('li')
          let galleryContent = `
            <h2 class="movies-item__title">${movie.title}</h2>
            <p class="movies-item__director"> <b> Director: </b> ${movie.director}</p>
            <p class="movies-item__category"><b>Category: </b>${movie.category}</p>
            <img class="movies-item__image" src="${movie.image}">
            <div class="movies-item__info">
              <p class="movies-item__year"><b> Year: </b> ${movie.year}</p>
              <p class="movies-item__stars"> <b>Stars: </b>${movie.starts}</p>
            </div>
          `
          movies.classList.add('movies-item')
          movies.innerHTML = galleryContent
          document.querySelector('.movies-container__list').appendChild(movies)
        }
      })
    })
  }

  reset (data) {
    document.querySelector('.reset').addEventListener('click', e => {
      e.preventDefault()
      document.querySelector('.movies-container__list').innerHTML = ''
      this.setMovies(data)
    })
  }
}
