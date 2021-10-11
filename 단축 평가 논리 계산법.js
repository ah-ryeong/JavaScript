// 논리 연산자를 이용해서 코드를 짧게 작성하는 것
true && true // true
true && false // false
true || false // true
true || true // true

const dog = {
    name : '멍멍이';
}

function getName(animal) {
    return animal && animal.name;
}

const name = getName();
console.log(name);

// and : 특정 값이 유용할 때만 사용할 경우 자주 쓴다.
console.log(true && 'hello'); // hello, 이 경우 앞에 true가 오면 뒤가 연산결과가 된다.
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 2); // 2

// or : 어떤 값이 falsy 하다면 어떤 값을 사용한다고 하면 엄청 유용하다.
const namelessDog = {
    name: '',
};

function getName2(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name2 = getName2(namelessDog);
console.log(name2);

console.log(false || 'hello'); // hello
console.log('' || '이름없다'); // 이름없다
console.log(null || 'null 이다'); // null이다
console.log(undefined || 'defined 되지 않았다!'); // defined 되지 않았다!
console.log(0 || '제로다'); // 제로다

// or 은 앞에 있는게 truthy 하면 뒤에 있는건 안 본다.
console.log(1 || '음?'); // 1
console.log(true && '여기 안 본다.'); // true
console.log('hello' || 'bye'); // hello
console.log({} && 2); // {}