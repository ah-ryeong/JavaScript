// Hoisting : 아직 선언되지 않은 함수 또는 변수를 끌어올려서 사용할 수 있는 js의 작동방식
myFunction();

function myFunction() {
    console.log('hello world');
}

// 이렇게 함수를 위에 선언해도 잘 동작함
// 하지만 왠만하면 피해야함 -> 코드를 이해하기가 힘듬..


console.log(number); // undefined 왜냐하면 js 입장에서는 var number = 2 가 아니라 var number;로 인식함
var number = 2;