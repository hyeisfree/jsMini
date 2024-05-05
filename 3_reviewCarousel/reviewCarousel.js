const fe = document.querySelector(".fe");
const be = document.querySelector(".be");
const fu = document.querySelector(".fu");
const btn_arrow = document.querySelector(".btn_arrow");
const surprise = document.querySelector(".surprise");

let userJob = [
  {
    job: "프론트엔드 개발자",
    picture: ".",
  },
  {
    job: "백엔드 개발자",
    picture: ".",
  },
  {
    job: "풀스택 개발자",
    picture: ".",
  },
];

let userName = prompt("이름을 입력해주세요!");
alert("환영합니다, " + userName + "님");
