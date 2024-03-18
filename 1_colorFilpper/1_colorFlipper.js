const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const color = document.getElementById("color");
  color.innerText = "바뀌기";
  console.log("클릭");
});
