const menu = {
  '특식': ['불고기','찜닭','닭볶음탕','스테이크','월남쌈','수육','아귀찜','쌈밥','낙지볶음'],
  '기타': ['초밥','짜장면','짬뽕','깐풍기','마파두부','잡채','팟타이','쌀국수','햄버거'],
  '해장': ['순대국','콩나물국밥','북엇국','홍합탕','뼈해장국','대파라면','매생이국','선지해장국','우거지국'],
  '간편식': ['샌드위치','프렌치토스트','떡볶이','시리얼','샐러드','밥버거','핫도그','편의점도시락','김밥 + 유부초밥'],
  '국/탕': ['육개장','닭개장','떡국','소고기무국','시래깃국','갈비탕','추어탕','삼계탕','대구탕'],
  '면': ['라멘','토마토스파게티','크림스파게티','냉면','잔치국수','비빔국수','칼국수','우동','콩국수'],
  '덮밥/볶음밥': ['카레','비빔밥','오므라이스','김치볶음밥','제육덮밥','연어덮밥','치킨마요덮밥','돈부리','오징어덮밥'],
  '찌개': ['된장찌개','김치찌개','부대찌개','순두부찌개','청국장찌개','동태찌개','비지찌개','고추장찌개','오징어찌개'],
}

const roulette = document.querySelector(".roulette");
const btnRotate = document.querySelector(".btn-rotate");
const result = document.querySelector('.result');
const spans = result.querySelectorAll('span');

function renderResult(deg) {
  let resultIndex = 0;

  for(let i=0; i<=8; i++) {
    if(deg >= 45 * i && deg < 45 * (i+1)) {
      resultIndex = i;
      break;
    }
  }

  const foodType = Object.keys(menu)[resultIndex];
  console.log(foodType);
  const food = menu[foodType][Math.floor(Math.random() * 9)];
  console.log(food);

  function timerHandler() {
    spans[0].textContent = foodType;
    spans[1].textContent = food;
  }

  setTimeout(timerHandler, 3000);
}

function handleRotateClick() {
  roulette.style.rotate = 0;
  spans[0].textContent = '';
  spans[1].textContent = '';
  const resultDeg = Math.floor(Math.random() * 18000);
  roulette.style.rotate = `${resultDeg}deg`;

  renderResult(resultDeg % 360);
}

btnRotate.addEventListener("click", handleRotateClick);