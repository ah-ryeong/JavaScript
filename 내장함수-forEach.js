// 배열 내장함수
const superHeros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '스파이더맨'
];

for(let i=0; i<superHeros.length; i++) {
    console.log(superHeros[i]);
}

// 위와 같은 것을 내장함수로 만들어보기
function print(hero) {
    console.log(hero);
}

superHeros.forEach(print); // 아이언맨 캡틴 아메리카 토르 스파이더맨

// 바로 선언하기
superHeros.forEach(function(hero) {
    console.log(hero);
}); 

// 화살표 함수 이용해서 바로 선언하기 
superHeros.forEach((hero) => {
    console.log(hero);
}); 