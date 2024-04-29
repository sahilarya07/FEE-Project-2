const imageContainer = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgs = document.querySelectorAll("#imgs img");


const INTERVAL = 3000;
let n=imgs.length;

let idx = 0;
document.body.style.backgroundImage = `url('${imageContainer.children[(idx+1)%n].src}')`;

let interval = setInterval(run, INTERVAL);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > imgs.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = imgs.length - 1;
    }
    const containerWidth = imageContainer.offsetWidth; 


const translationValue = -idx * containerWidth;

    imageContainer.style.transform = `translateX(${translationValue}px)`;
    document.body.style.backgroundImage = `url('${imageContainer.children[(idx+1)%n].src}')`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, INTERVAL);
}

rightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});
let but = document.querySelector("#btn")
let head=document.querySelector("#top");
let b=document.querySelector("#btn");
var theme ="white"
but.addEventListener("click", () =>{
    if(theme=="white"){
        b.innerText = "Change to blue";
        theme = "dark";
        head.setAttribute("class", "lg:w-1/4 md:w-1/3 sm:w-1/2 bg-green-500  text-lg p-4 fixed top-4 left-280");
        console.log(theme);

    }
    else{
        b.innerText = "Change to green";
        theme="white";  
        head.setAttribute("class", "lg:w-1/4 md:w-1/3 sm:w-1/2 bg-blue-500  text-lg p-4 fixed top-4 left-280")                  
    }
});
