let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//forEach, e, e.currentTarget, e.currentTarget.classList
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    num.textContent = count;
  });
});
