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
let index = 0;

images.forEach((element,index) => {
  contImage.innerHTML+= `
  <!-- immagine ${index+1} -->
  <div class="my-carousel-item" carousel-item="${index+1}">
    <img
      class="img-fluid"
      src="${element.image}"
      alt="${element.title}"
    />
    <div class="item-description px-3">
      <h2>${element.title}</h2>
      <p>${element.text}</p>
      </p>
    </div>
  </div>
  <!-- /immagine ${index+1} -->
  `;
  contSubImage.innerHTML +=`
  <!-- immagini interne ${index+1} -->

  <img
  class="img-fluid my-thumbnail"
  src="${element.image}"
  alt="Thumbnail of Marvel's Spiderman Miles Morale picture"
/>
<!-- /immagini interne ${index+1} -->

  `;
});

// create array of image e subImage
const slides = document.querySelectorAll(".my-carousel-item");
const thumbs = document.querySelectorAll(".my-thumbnail");

// add class active at firse image and first subImage
slides[index].classList.add("active");
thumbs[index].classList.add("active");

// add event listner btn next
const btnNext = document.querySelector(".my-next");
console.log(btnNext);
btnNext.addEventListener("click", function(){
  index = next();

});

// add event listner btn previous
const btnPrev = document.querySelector(".my-previous");
console.log(btnPrev);
btnPrev.addEventListener("click", function(){
  index = previous();
});
let stop="";
let stopInvert="";
let startStopCount = 0;
let invertCount = 0;
const startStopBtn = document.getElementById("my-stop-button")
startStopBtn.addEventListener("click",function(){
  clearInterval(stopInvert);
  if(startStopCount % 2 === 0){
    stop = setInterval(next,2000);
  } else{
    clearInterval(stop);
  }
  startStopCount++;
});

const inverterBtn = document.getElementById("my-order-button");
inverterBtn.addEventListener("click",function(){
  clearInterval(stop);
  startStopCount = 0;
  if(invertCount % 2 === 0){
    stopInvert = setInterval(previous,2000);
  } else{
    clearInterval(stopInvert);
  }
  invertCount++;
});





function next(){
  slides[index].classList.remove("active");
  thumbs[index].classList.remove("active");
  if(index < slides.length-1){
    index++;
  } else {
    index = 0;
  }
  slides[index].classList.add("active");
  thumbs[index].classList.add("active");
  return index;
}

function previous(){
slides[index].classList.remove("active");
thumbs[index].classList.remove("active");
if(index > 0){
index--;
} else {
index = 4;
}
slides[index].classList.add("active");
thumbs[index].classList.add("active");
return index;
}