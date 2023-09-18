const slider = document.querySelector('.event__slider')

let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      autoplay: false,
      loop: false,
      speed: 400,
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    slider.dataset.mobile = 'true'
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false'

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy()
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
