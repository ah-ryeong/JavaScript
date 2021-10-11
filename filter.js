// filter : 특정 조건을 만족하는 원소들을 찾아서 새로운 배열을 만드는 것
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

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone); // Object (done 값이 false 것만 들어있음) 
