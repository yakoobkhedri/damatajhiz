// dropdown
let dropdownBtn=Array.from(document.getElementsByClassName('dropdown-btn'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})

// swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var banner = new Swiper(".banner", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
var customer= new Swiper(".customer", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 2,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992:{
      slidesPerView:5
    },
    1200: {
      slidesPerView: 6,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});
var product= new Swiper(".product", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});