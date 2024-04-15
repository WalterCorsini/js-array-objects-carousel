// declaration object array
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const contImage = document.querySelector(".my-carousel-images");
const contSubImage = document.querySelector(".my-thumbnails");
let index = 0; //index array

createElement(contImage, contSubImage, images, index);

// create array of image e subImage
const slides = document.querySelectorAll(".my-carousel-item");
const thumbs = document.querySelectorAll(".my-thumbnail");

// add class active at firse image and first subImage
slides[index].classList.add("active");
thumbs[index].classList.add("active");

// add event listner btn next
document.querySelector(".my-next").addEventListener("click", function () {
  index = next(slides, thumbs, index);
});

// add event listner btn previous
document.querySelector(".my-previous").addEventListener("click", function () {
  index = previous(slides, thumbs, index);
});

// save in to variable setInterval 
let invertInterval = setInterval(function () {
  index = previous(slides, thumbs, index);
}, 2000);

let startInterval = setInterval(function () {
  index = next(slides, thumbs, index);
}, 2000);

//add event listner start button
document.getElementById("my-stop-button").addEventListener("click", function () {
  if (startInterval !== null) {
    clearInterval(startInterval);
    startInterval = null;
  } else {
    setInterval(function () {
      index = next(slides, thumbs, index);
    }, 2000);
  }
});

// add event listner invert button
document.getElementById("my-order-button").addEventListener("click", function () {
  if (invertInterval !== null) {
    clearInterval(invertInterval);
    invertInterval = null;
  } else {
    setInterval(function () {
      index = next(slides, thumbs, index);
    }, 2000);
  }
});

// click on thumbnails and move class active

document.querySelectorAll(".my-thumbnail").forEach((element) => {
  element.addEventListener("click", function () {
  index = moveOnClick(this.dataset.value, index);
  });
});


