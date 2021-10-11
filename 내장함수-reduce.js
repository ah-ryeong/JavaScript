// reduce : 배열의 모든 값을 활용하여 연산해야할 때 사용
// 잘 알아두면 유용하다
const numbers = [1, 2, 3, 4, 5];

// 0 -> 초기 accumulator 가 된다.
// accumulator : 누적된 값
// 초기값 0이 accumulator가 돼서 current(각 원소들)을 더해준다.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

const avg = numbers.reduce((accumulator, current, index, array) => {
    // 현재 처리하고 있는 원소가 맨 마지막 것 이라면
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(avg); // 평균값 구한거 : 3

// 숫자 아니라도 됨
const alphabets = ['a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'e'];

// 몇개있는지 세서 객체에 넣어줌
const counts = alphabets.reduce((acc, current) => {
    if(acc[current]) {
        acc[current] += 1;
    }else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts); // a: 3 b: 1 c: 2 d: 1 e: 1
