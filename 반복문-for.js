// for
//                 _____________
//                ↓                          |
// 시작 -> 조건 -(true)->구문실행 
//                 | 
//            (false)           
//                ↓ 
//                끝

for(let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

for(let j = 10; i > 0; i--) {
    console.log(i); // 10 9 8 7 6 5 4 3 2 1 
}

// 2씩 빼기, 0 포함
for(let k = 10; k >= 0; k-=-2) {
    console.log(i); // 10 8 6 4 2 0
}

// for문과 배열 사용하기
const names = ['멍멍이', '야옹이', '멍뭉이'];
for (let m = 0; m < names.length; m++) {
    console.log(names[m]);  // 멍멍이 야옹이 멍뭉이
}