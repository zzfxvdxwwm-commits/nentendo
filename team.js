

let current = 0;

const characters = [
 {
   name: "group10",
   image:"img/group10.jpg"
 },
 
  {
    name: "Leen Alawamer \n 4555893",
    image: "img/Leen.jpg"
   
  },
  {
    name: "Dai ALharbi \n 4555496",
    image: "img/dai.jpg"
  },
  {
    name: "Raghad Al-Sheikh\n 4556261",
    image: "img/ragad.jpg"
  },
  {
    name: "Razan Alayad \n 4551372",
    image: "img/razan.jpg"
  } 
];

const img = document.querySelector(".zx9-avatar-img");
const title = document.querySelector(".zx9-title-main");
const prev = document.querySelector(".zx9-btn-left");
const next = document.querySelector(".zx9-btn-right");

function showCharacter() {
  img.src = characters[current].image;
  title.textContent = characters[current].name;
}

showCharacter();

prev.addEventListener("click", function () {
  if (current > 0) {
    current--;
    showCharacter();
  }
});

next.addEventListener("click", function () {
  if (current < characters.length - 1) {
    current++;
    showCharacter();
  }
});