/* Math.random() -> 0 이상 1 미만의 난수 생성 
Math.floor() -> 주어진 수 이하의 가장 큰 정수 반환 */

function getRandom(min, max) {
  // min 이상 max 미만의 난수 생성
  return Math.random() * (max - min) + min;
}
console.log(getRandom(1, 10)); // 3.806---

// 화살표 함수로 바꿔보기

const getRandom2 = (min, max) => {
  return Math.random() * (max - min) + min;
  /* return(반환문)을 쓰지 않을 경우 undefined로 반환됨. 
    함수의 본문이 단일 표현식 여부에 따라 반환문 작성 유무 달라짐. */
};
console.log(getRandom2(1, 10)); // 8.005---

// 또는 화살표 함수를 사용하여 한 줄로 사용한다면,

const getRandom3 = (min, max) => Math.random() * (max - min) + min;
console.log(getRandom3(1, 10)); // 7.589---

function getRandom4(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandom4(1, 10));
// 2(정수로 반환)

// 화살표 함수로 바꾸기
const getRandom6 = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandom6(1, 10)); // 9

// 화살표 함수로 한 줄로 적어서 바꿔보면,

const getRandom5 = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(getRandom5(1, 10)); // 1
