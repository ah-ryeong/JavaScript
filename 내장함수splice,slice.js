const numbers = [10, 20, 30, 40];

// splice : 배열에서 특정항목을 제거
// 해당 배열이 몇번째인지 명시를 해줘야함
// 기존의 배열을 수정해버림
const index = numbers.indexOf(30);
console.log(index); // 2

const spliced = numbers.splice(index, 2); // index 부터 시작해서 2개 지우겠다.
console.log(spliced); // [30, 40]
console.log(numbers); // [10, 20]



// slice : 배열에서 잘라냄 제거
// splice와 차이점은 기존의 배열은 건들이지 X
// 앞 파라미터 값부터 두번째 파라미터 전까지 자름
const sliced = numbers.slice(0, 2);
console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
