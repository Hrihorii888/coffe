let media = document.querySelector("video");
let playBtn = document.querySelector(".vd-Btn");

playBtn.addEventListener(
  "click",
  function playMedia() {
    if (media.paused) {
      media.play();
      playBtn.classList.toggle("play-video");
    } else {
      media.pause();
      playBtn.classList.toggle("play-video");
    }
  },
  false
);
media.addEventListener(
  "click",
  function () {
    if (media.paused) {
      media.play();
      playBtn.classList.toggle("play-video");
    } else {
      media.pause();
      playBtn.classList.toggle("play-video");
    }
  },
  false
);

let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".header__logo");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  logo.classList.toggle("active");
  burger.classList.toggle("active");
});

let carColm = document.querySelectorAll(".standards__carusel-colum");
let carBtm = document.querySelector(".standards__carusel-btn-next");
arr = [];
for (let item of carColm) {
  arr.push(item);
}

carBtm.addEventListener("click", function () {
  for (let i of arr) {
    if (i.style.order == arr.length - 1) {
      i.style.order -= arr.length - 1;
    } else {
      i.style.order = +i.style.order + 1;
    }
  }
});

let btns = document.querySelectorAll(".tab");
for (let btn of btns) {
  btn.onclick = function () {
    document.querySelector(".giftset__tabs .active").classList.remove("active");
    this.classList.add("active");
  };
}
