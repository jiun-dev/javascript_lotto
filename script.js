var 후보군 = Array(45)
  .fill()
  .map(function (요소, 인덱스) {
    return 인덱스 + 1;
  });

console.log(후보군);

var 셔플 = [];
while (후보군.length > 0) {
  var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
  셔플.push(이동값); // 랜덤하게 섞어서 후보군에 푸쉬함 (엄밀하게 수학적으로 랜덤은 아님에 주의)
}
console.log(셔플);
var 보너스 = 셔플[셔플.length - 1]; // 마지막숫자를 가져올수 있습니다.
var 당첨숫자들 = 셔플.slice(0, 6).sort(function (p, c) {
  // slice 는 (0부터 6) 까지 숫자를 6을 제외하고 나눕니다
  return p - c; // sort는 숫자를 순서대로 정렬 c - p 로 하면 내림차순으로 p c 를 비교하여 뺀 결과가 0보다 크면 순서를 바꾸기 때문에 순서대로 됩니다.
});

var 결과창 = document.querySelector("#결과창"); // html 태그를 찾는 선택자

function 공색칠하기(숫자, 결과창) {
  var 공 = document.createElement("div");
  공.textContent = 숫자;
  공.style.display = "inline-block"; // javascript로 css를 추가하는 방법
  공.style.border = "1px solid black";
  공.style.borderRadius = "10px";
  공.style.width = "20px";
  공.style.height = "20px";
  공.style.textAlign = "center";
  공.style.marginRight = "10px";
  var 배경색;
  if (숫자 <= 10) {
    배경색 = "red";
  } else if (숫자 <= 20) {
    배경색 = "orange";
  } else if (숫자 <= 30) {
    배경색 = "yellow";
  } else if (숫자 <= 40) {
    배경색 = "blue";
  } else {
    배경색 = "green";
  }
  공.style.background = 배경색;
  결과창.appendChild(공);
}

setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[0], 결과창);
}, 1000); // 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[1], 결과창);
}, 2000); // 2초
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[2], 결과창);
}, 3000); // 3초
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[3], 결과창);
}, 4000); // 4초
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[4], 결과창);
}, 5000); // 5초
setTimeout(function 비동기콜백함수() {
  공색칠하기(당첨숫자들[5], 결과창);
}, 6000); // 6초

setTimeout(function 비동기콜백함수() {
  var 칸 = document.querySelector(".보너스")[0]; // 클래스는 여러번 사용할수 있기 때문에 뒤에 번호를 붙여줘야 합니다.
  공색칠하기(보너스, 칸);
}, 7000);
