export class Gallery {
  constructor (container, data) {
    this.i = 0
    this.template(container)
    this.setImages(data)
    this.setDots(data)
    this.navigateGallery(container, this.i, data)
    this.navigateDots(this.i, data)
  }

  template (container) {
    let galleryContainer = `
      <nav class="gallery-navigation">
        <a href="" class="gallery-navigation__button prev"></a>
        <a href="" class="gallery-navigation__button next"></a>
      </nav>
      <ul class="gallery-container__images"></ul>
      <ul class="gallery-container__dots"></ul>
    `
    container.innerHTML = galleryContainer
  }

  setImages (data) {
    data.forEach(img => {
      let images = document.createElement('li')
      let galleryContent = `
          <img src="${img}" class="gallery-image">
      `
      images.classList.add('gallery-figure')
      images.innerHTML = galleryContent
      document.querySelector('.gallery-container__images').appendChild(images)
    })
  }

  changeIndex (i) {
    let image = document.querySelectorAll('.gallery-figure')
    let dots = document.querySelectorAll('.gallery-dot')
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')

    if (i >= 0 && i < image.length && i !== this.i) {
      image[this.i].classList.remove('show')
      dots[this.i].classList.remove('selected')
      this.i = i
      image[this.i].classList.add('show')
      dots[this.i].classList.add('selected')
      dots[this.i].focus()

      console.log(this.i)

      if (this.i !== 0) {
        prev.classList.remove('disabled')
      }

      if (this.i !== image.length - 1) {
        next.classList.remove('disabled')
      }
    }
  }

  goNext () {
    this.changeIndex(this.i + 1)
  }

  goPrev () {
    this.changeIndex(this.i - 1)
  }

  setDots (data) {
    data.forEach(img => {
      let dots = document.createElement('li')
      let dotsContent = `
          <div class="gallery-image__dot"></div>
      `
      dots.classList.add('gallery-dot')
      dots.innerHTML = dotsContent
      document.querySelector('.gallery-container__dots').appendChild(dots)
    })
  }

  navigateDots (data) {
    let dotsContainer = document.querySelector('.gallery-container__dots')
    let dots = document.querySelectorAll('.gallery-dot')

    dotsContainer.addEventListener('click', e => {
      let target = e.target
      if (target.tagName === 'LI') {
        let i = Array.from(dots).indexOf(target)
        this.changeIndex(i)
      }
    })
  }

  navigateGallery (container, i, data) {
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')
    let image = document.querySelectorAll('.gallery-figure')
    let dots = document.querySelectorAll('.gallery-dot')

    if (i === 0) {
      prev.classList.add('disabled')
      image[this.i].classList.add('show')
      dots[i].classList.add('selected')
    }

    container.addEventListener('keyup', e => {
      if (e.key === 'ArrowRight') next.click()
      if (e.key === 'ArrowUp') next.click()
      if (e.key === 'ArrowLeft') prev.click()
      if (e.key === 'ArrowDown') prev.click()
    })

    container.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target

      if (target === prev) {
        next.classList.remove('disabled')
        this.goPrev()
      } else if (target === next) {
        prev.classList.remove('disabled')
        this.goNext()
      }

      if (this.i === 0) {
        prev.classList.add('disabled')
      }

      if (this.i === image.length - 1) {
        next.classList.add('disabled')
      }
    })
  }
}
