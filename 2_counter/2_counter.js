const count = document.querySelector(".count_number");
const btn_dec = document.querySelector(".btn_decrease");
const btn_res = document.querySelector(".btn_reset");
const btn_inc = document.querySelector(".btn_increase");

btn_inc.addEventListener("click", () => {
  let num = count.textContent;
  // console.log(num); 0부터 시작
  num = Number(num) + 1;
  // console.log(num); 1부터 시작
  count.textContent = num;
  document.body.style.backgroundColor = "#FFF0F5"; // 라벤더블러쉬로 색 변경
});

btn_dec.addEventListener("click", () => {
  let num = count.textContent;
  num = Number(num) - 1;
  count.textContent = num;
  document.body.style.backgroundColor = "#F0FFF0"; // 허니듀로 색 변경
});

btn_res.addEventListener("click", () => {
  let num = 0;
  num = Number(num);
  count.textContent = num;
  document.body.style.backgroundColor = "#FFFFFF"; // 화이트로 색 변경
});
