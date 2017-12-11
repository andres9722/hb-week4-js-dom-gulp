import { Gallery } from './modules/gallery'
import { Movies } from './modules/movies'

import dataGallery from './modules/gallery-images'
import dataMovies from './modules/movies-list'

new Gallery(document.querySelector('.gallery-container'), dataGallery)
//new Movies(document.querySelector('.movies-container'), dataMovies)
