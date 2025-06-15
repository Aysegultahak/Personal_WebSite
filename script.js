// Project 1
new Swiper(".mySwiper1", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

// Project 2
new Swiper(".mySwiper2", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

// Project 3
new Swiper(".mySwiper3", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  // Buton ikonunu değiştir
  toggleBtn.textContent = body.classList.contains("light-theme") ? "🌞" : "🌙";
});
function setLanguage(lang) {
  const elements = document.querySelectorAll('.lang');
  elements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.textContent = translation;
    }
  });
}

let menuIcon= document.querySelector('#menu-icon');
let navBar= document.querySelector('.navbar');

mebuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}