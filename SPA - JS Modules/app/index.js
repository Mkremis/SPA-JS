import { App } from "./App.js";
import api from "./helpers/wp_api.js";
let audio;
document.addEventListener("DOMContentLoaded", App);

const Play = function (source, target) {
  return new Promise(function (resolve, reject) {
    // return a promise
    audio = new Audio(); // create audio wo/ src
    audio.preload = "auto"; // intend to play through
    audio.autoplay = true; // autoplay when loaded
    audio.onerror = reject; // on error, reject
    audio.onended = resolve; // when done, resolve
    audio.oncanplay = () => {
      target.classList.toggle("--hidden");
      target.parentNode
        .querySelector(".deezer-card__album--pause")
        .classList.toggle("--hidden");
      target.parentElement.parentElement
        .querySelector(".deezer-card__album--playing")
        .classList.toggle("--hidden");
    };

    audio.src = source;
  });
};

document.addEventListener("click", (e) => {
  const { target } = e,
    source = target.dataset.source;
  if (target.matches(".deezer-card__album--play")) {
    Play(source, target).then((res) => {
      target.classList.toggle("--hidden");
      target.parentNode
        .querySelector(".deezer-card__album--pause")
        .classList.toggle("--hidden");
      target.parentElement.parentElement
        .querySelector(".deezer-card__album--playing")
        .classList.toggle("--hidden");
    });
  } else if (target.matches(".deezer-card__album--pause")) {
    audio.pause();
    target.classList.toggle("--hidden");
    target.parentNode
      .querySelector(".deezer-card__album--play")
      .classList.toggle("--hidden");
    target.parentElement.parentElement
      .querySelector(".deezer-card__album--playing")
      .classList.toggle("--hidden");
  }

  if (e.target.matches(".panel-btn") || e.target.matches(".panel-btn *")) {
    document.querySelector(".panel-btn").classList.toggle("is-active");
    document.querySelector(".panel").classList.toggle("is-active");
  }
  if (e.target.matches(".menu a")) {
    document.querySelector(".panel-btn").classList.toggle("is-active");
    document.querySelector(".panel").classList.toggle("is-active");
  }

  if (target.matches(".post-card a")) {
    localStorage.setItem("wpPostId", e.target.dataset.id);
  }
  return false;
});

window.addEventListener("hashchange", () => {
  api.page = 1;
  App();
});
