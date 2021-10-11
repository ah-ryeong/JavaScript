// scope : 변수 혹은 함수를 선언할 때 유효한 범위를 의미함
// global : 전역 , 코드의 모든 범위에서 사용 가능하다.
// function : 특정 함수 내부에서만 사용 가능
// block : if, for, switch 문 같은걸 사용할 때 {}로 감싸진 block 에서만 사용 가능하다

const value = 'hello';

function myFunction() {
    console.log('myFunction : ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction : ');
    const value = 'bye!';
    console.log(value);
}

myFunction(); // myFunction hello
otherFunction();  // otherFunction bye!

console.log('global scope : '); // global scope hello
console.log(value);



function myFunction2() {
    const value = 'bye~';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside : ');
        console.log(value); // bye!
        console.log(anotherValue); // world
    }
    functionInside();
}

myFunction2(); 
console.log('global scope2 : '); 
console.log(value); // hello
console.log(anotherValue); // error


function myFunction3() {
    const value = 'bye~~~';

    if(true) {
        const value = 'hello world';
        console.log('blockScope : ');
        console.log(value);  // hello world
    }
    console.log('functionScope : ');
    console.log(value); // bye
}

myFunction3();
console.log('global scope3 : '); 
console.log(value); // hello