let bgColor = [{ color: "purple" }, { color: "blue" }, { color: "yellow" }];
let btn = document.querySelector("button");
let color = document.getElementById("color");

/* btn.addEventListener("click", function () {
   if (color.innerText === "red") {
     color.innerText = "purple";
   }
 }); */

btn.addEventListener("click", () => {
  if (color.innerText === "red") {
    color.innerText = "purple";
  }
}); // 화살표 함수로 바꿔보기
