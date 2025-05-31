"use strict";

let imageUrls = [
  "https://images.unsplash.com/photo-1743942439157-2194bd47bd1f?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1744138038271-2ffa619dcedf?q=80&w=3400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734880595500-f95260b195e3?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let imageContainer = document.querySelector(".img-container");
let dots = document.querySelectorAll(".pagination span");
let currentIdx = 0;

leftArrow.addEventListener("click", function () {
  currentIdx--;
  if (currentIdx < 0) currentIdx = imageUrls.length - 1;
  imageContainer.setAttribute("src", imageUrls[currentIdx]);
  dots[currentIdx].classList.toggle("bg-white");
  dots.forEach((dot, idx) => {
    if (idx == currentIdx) {
      dot.classList.remove("bg-gray-200/60");
      dot.classList.add("bg-white");
    } else {
      dot.classList.add("bg-gray-200/60");
      dot.classList.remove("bg-white");
    }
  });
});

let autoPlayInterval = setInterval(() => {
  autoplay();
}, 2000);

rightArrow.addEventListener("click", autoplay);

imageContainer.addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval);
});
imageContainer.addEventListener("mouseleave", () => {
  autoPlayInterval = setInterval(() => {
    autoplay();
  }, 2000);
});

function autoplay() {
  currentIdx++;
  if (currentIdx > imageUrls.length - 1) currentIdx = 0;
  imageContainer.setAttribute("src", imageUrls[currentIdx]);
  dots.forEach((dot, idx) => {
    if (idx === currentIdx) {
      dot.classList.remove("bg-gray-200/60");
      dot.classList.add("bg-white");
    } else {
      dot.classList.add("bg-gray-200/60");
      dot.classList.remove("bg-white");
    }
  });
}
