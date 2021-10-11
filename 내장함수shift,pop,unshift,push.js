const numbers = [10, 20, 30, 40];

// shift : 첫 번째 원소를 배열에서 추출
// 기존의 배열을 수정한다.
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]

// pop : 맨 마지막 원소를 배열에서 추출
// 기존의 배열을 수정한다.
const value2 = numbers.pop();
console.log(numbers); // [20, 30]

// unshift : 맨 앞에 값을 추가한다.
numbers.unshift(5); // numbers 배열의 맨 앞에 5를 추가한다.
console.log(numbers); // [5, 20, 30]

//push : 배열에 값을 추가한다.
numbers.push(50); 
console.log(numbers); // [5, 20, 30, 50]

// ---------------위의 함수는 배열의 값을 수정한다.

// concat : 여러개의 배열을 하나의 배열로 합쳐준다.
// 기존의 배열을 건들이지 X
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

// join : 배열 안에 있는 것들을 문자열 형태로 합쳐준다.
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
