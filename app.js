const hexButton = document.querySelector(".hex-btn");
const rgbaButton = document.querySelector(".rgba-btn");
const hslButton = document.querySelector(".hsl-btn");
const button = document.querySelectorAll(".btn");

button.forEach((e) => {
 if (e.classList.contains("hex-btn")) {
  e.addEventListener("click", changeHex);
 } else if (e.classList.contains("rgba-btn")) {
  e.addEventListener("click", changeRgba);
 } else if (e.classList.contains("hsl-btn")) {
  e.addEventListener("click", changeHsl)

 }
})
function changeHex() {
 const hexNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
 let hexColor = "";
 for (let i = 0; i < 6; i++) {
  let randomHexCode = Math.floor(Math.random() * hexNumber.length);
  hexColor += hexNumber[randomHexCode];
 }
 document.querySelector(".hex-value").innerHTML = hexColor;
 document.querySelector("body").style.backgroundColor = "#" + hexColor;
}
//rgba
function changeRgba(){
 const r = Math.floor(Math.random() * 255 + 1)
 const g = Math.floor(Math.random() * 255 + 1)
 const b = Math.floor(Math.random() * 255 + 1)
 const color = (`(${r}, ${g}, ${b})`);
 document.querySelector(".rgba-value").innerHTML = color;
 document.querySelector("body").style.backgroundColor = "rgba" + color;
}

//hsl
function changeHsl() {
 const h = Math.floor(Math.random() * 360 + 1)
 const s = Math.floor(Math.random() * 100 + 1)
 const l = Math.floor(Math.random() * 100 + 1)
 const color = `(${h}, ${s}%, ${l}%)`;
 document.querySelector(".hsl-value").innerHTML = color;
 document.querySelector("body").style.backgroundColor = "hsl"+color;
}
