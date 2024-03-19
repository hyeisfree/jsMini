let btn = document.querySelector("button");
let color = document.getElementById("color");
let background = document.getElementsByClassName("bg");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
} // 구글링 -> Math.floor, Math.random 함수 찾아보기

/* btn.addEventListener("click", function () {
   if (color.innerText === "red") {
     color.innerText = "purple";
   }
 }); */

btn.addEventListener("click", () => {
  color.innerText = getRandomColor();
  document.body.style.backgroundColor = getRandomColor();
}); // 화살표 함수로 바꿈.
