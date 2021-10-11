// 배열 안의 원소를 변환할 때 사용한다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squered = [];
// for(let i = 0; i < array.length; i++) {
//     squered.push(array[i] * array[i]);
// }
// console.log(squered); // [1 4 9 16 25 36 49 64]

// map
const squere = n => n * n;
const squered2 = array.map(squere); // [1 4 9 16 25 36 49 64]
// 혹은 const squered2 = array.map(n => n * n); 

const items = [
    {
        id : 1,
        text : 'hello'
    },
    {
        id : 2,
        text : 'bye'
    }
];

// 문자열 배열로 바꾸기
const texts = items.map(item => item.text);
console.log(texts); // ["hello", "bye"]

// 배열에서 원하는 항목이 어디에 있는지 확인하기
// index of
const superHeros = ['아이언맨', '토르', '스파이더맨', '닥터 스트레인지'];
const index = superHeros.indexOf('토르'); 
console.log(index); // 1

// 배열 안에 찾는 값이 객체이거나 조건으로 찾는 경우
// find index
const todos = [
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '함수 배우기',
        done : true
    },
    {
        id : 3,
        text : '객체와 배열 배우기',
        done : true
    },
    {
        id : 4,
        text : '배열 내장함수 배우기',
        done : false
    }
];

const index2 = todos.findIndex(doto => todo.id === 3);
console.log(index);

// find함수 : 찾은 값을 반환함 
const todo2 = todos.findIndex(doto => todo.done === false);
console.log(todo);
