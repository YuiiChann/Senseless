const questionImg = document.querySelector(".question-img");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const heartLoader = document.querySelector(".cssload-main");
const music = document.getElementById("bg-music");
const floatingHearts = document.querySelector(".floating-hearts");

let noScale = 1;
let yesScale = 1;
let clickCount = 0;

const noTexts = [
  "Are you sure???",
  "Please, cutiee >.<",
  "I'll be so sad n cry so much TT^TT" ,
  "Pleaseeeee!!?",
  "Let's chance!!!"
];


const noImages = [
  "cute2.gif",
  "cute3.gif",
  "cute4.gif",
  "cute5.gif",
];
const yesImage = "cute6.gif";

// ===== YES =====
yesBtn.addEventListener("click", () => {
  changeGif(questionImg, yesImage);
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";
  music.play();

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    document.body.classList.add("dark-mode");
    startHearts();
  }, 2500);
});

// ===== NO =====
noBtn.addEventListener("click", () => {

  // NO nhỏ dần
  noScale -= 0.12;
  if (noScale < 0.25) noScale = 0.25;
  noBtn.style.transform = `scale(${noScale})`;

  // YES to lên
  yesScale += 0.18;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Đổi nội dung
  if (clickCount < noTexts.length) {
  noBtn.innerText = noTexts[clickCount];


  // Đổi ảnh chỉ tới ảnh 5
    if (clickCount === 0) changeGif(questionImg, noImages[0]);
   if (clickCount === 1) changeGif(questionImg, noImages[1]);
   if (clickCount === 2) changeGif(questionImg, noImages[2]);
   if (clickCount >= 3) changeGif(questionImg, noImages[3])
    ;

    clickCount++;
  }

  // NO bắt đầu chạy sau lần 5
  if (clickCount >= 5) {
    moveButton();
  }
});

// ===== NO CHẠY NHƯNG VẪN BẤM ĐƯỢC =====
function moveButton() {

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// ===== TIM BAY =====
 function startHearts() {

  const images = [

    "heart.jpg",
    "heart1.jpg",
    "heart2.jpg",
    "heart3.jpg",
    "heart4.jpg",
    "heart5.jpg",
    "heart6.jpg",
    "heart7.jpg",
    "heart8.jpg",
    "heart9.jpg",
    "heart10.jpg",
    "heart11.jpg",
    "heart12.jpg"
  ];

  setInterval(() => {

    const heart = document.createElement("img");

    // random ảnh
    heart.src = images[Math.floor(Math.random() * images.length)];

    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.width = Math.random() * 40 + 20 + "px";
    heart.style.bottom = "-50px";

    floatingHearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);

  }, 150);
}
function changeGif(imgElement, newSrc) {
  imgElement.src = "";
  setTimeout(() => {
    imgElement.src = newSrc + "?v=" + Date.now();
  }, 10);
}
