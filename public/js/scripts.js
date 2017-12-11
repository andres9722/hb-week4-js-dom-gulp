(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _gallery = require('./modules/gallery');

var _movies = require('./modules/movies');

var _galleryImages = require('./modules/gallery-images');

var _galleryImages2 = _interopRequireDefault(_galleryImages);

var _moviesList = require('./modules/movies-list');

var _moviesList2 = _interopRequireDefault(_moviesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _gallery.Gallery(document.querySelector('.gallery-container'), _galleryImages2.default);

new _movies.Movies(document.querySelector('.movies-container'), _moviesList2.default);

},{"./modules/gallery":3,"./modules/gallery-images":2,"./modules/movies":5,"./modules/movies-list":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['https://static.pexels.com/photos/695342/pexels-photo-695342.jpeg', 'https://images.pexels.com/photos/97524/pexels-photo-97524.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/97587/pexels-photo-97587.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/42094/pexels-photo-42094.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/48012/pexels-photo-48012.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', 'https://images.pexels.com/photos/52907/pexels-photo-52907.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = exports.Gallery = function () {
  function Gallery(container, data) {
    _classCallCheck(this, Gallery);

    this.i = 0;
    this.template(container);
    this.setImages(data);
    this.setDots(data);
    this.navigateGallery(container, this.i, data);
    this.navigateDots(this.i, data);
  }

  _createClass(Gallery, [{
    key: 'template',
    value: function template(container) {
      var galleryContainer = '\n      <nav class="gallery-navigation">\n        <a href="" class="gallery-navigation__button prev"></a>\n        <a href="" class="gallery-navigation__button next"></a>\n      </nav>\n      <ul class="gallery-container__images"></ul>\n      <ul class="gallery-container__dots"></ul>\n    ';
      container.innerHTML = galleryContainer;
    }
  }, {
    key: 'setImages',
    value: function setImages(data) {
      data.forEach(function (img) {
        var images = document.createElement('li');
        var galleryContent = '\n          <img src="' + img + '" class="gallery-image">\n      ';
        images.classList.add('gallery-figure');
        images.innerHTML = galleryContent;
        document.querySelector('.gallery-container__images').appendChild(images);
      });
    }
  }, {
    key: 'changeIndex',
    value: function changeIndex(i) {
      var image = document.querySelectorAll('.gallery-figure');
      var dots = document.querySelectorAll('.gallery-dot');
      var prev = document.querySelector('.prev');
      var next = document.querySelector('.next');

      if (i >= 0 && i < image.length && i !== this.i) {
        image[this.i].classList.remove('show');
        dots[this.i].classList.remove('selected');
        this.i = i;
        image[this.i].classList.add('show');
        dots[this.i].classList.add('selected');
        dots[this.i].focus();

        console.log(this.i);

        if (this.i !== 0) {
          prev.classList.remove('disabled');
        }

        if (this.i !== image.length - 1) {
          next.classList.remove('disabled');
        }
      }
    }
  }, {
    key: 'goNext',
    value: function goNext() {
      this.changeIndex(this.i + 1);
    }
  }, {
    key: 'goPrev',
    value: function goPrev() {
      this.changeIndex(this.i - 1);
    }
  }, {
    key: 'setDots',
    value: function setDots(data) {
      data.forEach(function (img) {
        var dots = document.createElement('li');
        var dotsContent = '\n          <div class="gallery-image__dot"></div>\n      ';
        dots.classList.add('gallery-dot');
        dots.innerHTML = dotsContent;
        document.querySelector('.gallery-container__dots').appendChild(dots);
      });
    }
  }, {
    key: 'navigateDots',
    value: function navigateDots(data) {
      var _this = this;

      var dotsContainer = document.querySelector('.gallery-container__dots');
      var dots = document.querySelectorAll('.gallery-dot');

      dotsContainer.addEventListener('click', function (e) {
        var target = e.target;
        if (target.tagName === 'LI') {
          var i = Array.from(dots).indexOf(target);
          _this.changeIndex(i);
        }
      });
    }
  }, {
    key: 'navigateGallery',
    value: function navigateGallery(container, i, data) {
      var _this2 = this;

      var prev = document.querySelector('.prev');
      var next = document.querySelector('.next');
      var image = document.querySelectorAll('.gallery-figure');
      var dots = document.querySelectorAll('.gallery-dot');

      if (i === 0) {
        prev.classList.add('disabled');
        image[this.i].classList.add('show');
        dots[i].classList.add('selected');
      }

      container.addEventListener('keyup', function (e) {
        if (e.key === 'ArrowRight') next.click();
        if (e.key === 'ArrowUp') next.click();
        if (e.key === 'ArrowLeft') prev.click();
        if (e.key === 'ArrowDown') prev.click();
      });

      container.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        if (target === prev) {
          next.classList.remove('disabled');
          _this2.goPrev();
        } else if (target === next) {
          prev.classList.remove('disabled');
          _this2.goNext();
        }

        if (_this2.i === 0) {
          prev.classList.add('disabled');
        }

        if (_this2.i === data.length - 1) {
          next.classList.add('disabled');
        }
      });
    }
  }]);

  return Gallery;
}();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  title: 'The Godfather',
  director: 'Francis Ford Coppola',
  year: '1972',
  starts: 'Marlon Brando, Al Pacino, James Caan',
  category: 'Drama',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg'
}, {
  title: 'Fargo ',
  director: 'Joel Coen',
  year: '1996',
  starts: 'William H. Macy, Frances McDormand, Steve Buscemi',
  category: 'Thriller',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: "Schindler's List",
  director: 'Steven Spielberg',
  year: '1993',
  starts: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
  category: 'Drama',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: 'Reservoir Dogs',
  director: 'Quentin Tarantino',
  year: '1992',
  starts: 'Harvey Keitel, Tim Roth, Michael Madsen',
  category: 'Thriller',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: 'Fight Club',
  director: 'David Fincher',
  year: '1999',
  starts: 'Brad Pitt, Edward Norton, Meat Loaf',
  category: 'Drama',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: 'Split',
  director: 'M. Night Shyamalan',
  year: '2016',
  starts: 'James McAvoy, Anya Taylor-Joy, Haley Lu Richardson',
  category: 'Thriller',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: 'Se7en',
  director: 'David Fincher',
  year: '1995',
  starts: 'Morgan Freeman, Brad Pitt, Kevin Spacey',
  category: 'Drama',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  title: 'Memento',
  director: 'Christopher Nolan',
  year: '2000',
  starts: 'Guy Pearce, Carrie-Anne Moss, Joe Pantoliano',
  category: 'Thriller',
  image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR0,0,182,268_AL_.jpg'
}];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movies = exports.Movies = function () {
  function Movies(container, data) {
    _classCallCheck(this, Movies);

    this.template(container, data);
    this.setMovies(data);
    this.filterThriller(data);
    this.filterDrama(data);
    this.reset(data);
  }

  _createClass(Movies, [{
    key: 'template',
    value: function template(container) {
      var moviesItem = '\n      <ul class="movies-container__list"></ul>\n    ';
      container.innerHTML = moviesItem;
    }
  }, {
    key: 'setMovies',
    value: function setMovies(data) {
      data.forEach(function (movie) {
        var movies = document.createElement('li');
        var galleryContent = '\n          <h2 class="movies-item__title">' + movie.title + '</h2>\n          <p class="movies-item__director"> <b> Director: </b> ' + movie.director + '</p>\n          <p class="movies-item__category"><b>Category: </b>' + movie.category + '</p>\n          <img class="movies-item__image" src="' + movie.image + '">\n          <div class="movies-item__info">\n            <p class="movies-item__year"><b> Year: </b> ' + movie.year + '</p>\n            <p class="movies-item__stars"> <b>Stars: </b>' + movie.starts + '</p>\n          </div>\n      ';
        movies.classList.add('movies-item');
        movies.innerHTML = galleryContent;
        document.querySelector('.movies-container__list').appendChild(movies);
      });
    }
  }, {
    key: 'filterDrama',
    value: function filterDrama(data) {
      document.querySelector('.thriller').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.movies-container__list').innerHTML = '';
        data.filter(function (movie) {
          if (movie.category === 'Thriller') {
            var movies = document.createElement('li');
            var galleryContent = '\n            <h2 class="movies-item__title">' + movie.title + '</h2>\n            <p class="movies-item__director"> <b> Director: </b> ' + movie.director + '</p>\n            <p class="movies-item__category"><b>Category: </b>' + movie.category + '</p>\n            <img class="movies-item__image" src="' + movie.image + '">\n            <div class="movies-item__info">\n              <p class="movies-item__year"><b> Year: </b> ' + movie.year + '</p>\n              <p class="movies-item__stars"> <b>Stars: </b>' + movie.starts + '</p>\n            </div>\n          ';
            movies.classList.add('movies-item');
            movies.innerHTML = galleryContent;
            document.querySelector('.movies-container__list').appendChild(movies);
          }
        });
      });
    }
  }, {
    key: 'filterThriller',
    value: function filterThriller(data) {
      document.querySelector('.drama').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.movies-container__list').innerHTML = '';
        data.filter(function (movie) {
          if (movie.category === 'Drama') {
            var movies = document.createElement('li');
            var galleryContent = '\n            <h2 class="movies-item__title">' + movie.title + '</h2>\n            <p class="movies-item__director"> <b> Director: </b> ' + movie.director + '</p>\n            <p class="movies-item__category"><b>Category: </b>' + movie.category + '</p>\n            <img class="movies-item__image" src="' + movie.image + '">\n            <div class="movies-item__info">\n              <p class="movies-item__year"><b> Year: </b> ' + movie.year + '</p>\n              <p class="movies-item__stars"> <b>Stars: </b>' + movie.starts + '</p>\n            </div>\n          ';
            movies.classList.add('movies-item');
            movies.innerHTML = galleryContent;
            document.querySelector('.movies-container__list').appendChild(movies);
          }
        });
      });
    }
  }, {
    key: 'reset',
    value: function reset(data) {
      var _this = this;

      document.querySelector('.reset').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.movies-container__list').innerHTML = '';
        _this.setMovies(data);
      });
    }
  }]);

  return Movies;
}();

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
