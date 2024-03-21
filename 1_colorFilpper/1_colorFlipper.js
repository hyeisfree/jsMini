const btn = document.querySelector("button");
const span = document.querySelector("span"); // DOM 객체 불러오기

function randomRGB() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return `rgb(${rColor},${gColor},${bColor})`;
}

btn.addEventListener("click", () => {
  const newColor = randomRGB();
  document.body.style.backgroundColor = newColor;
  span.innerText = newColor;
  btn.style.backgroundColor = newColor;
});
