const numbers = {
    a : 1,
    b : 2
}

numbers.a = 5;

console.log(numbers); // object {a : 5, b : 2}

// getter와 setter를 사용하면 특정 값을 바꾸거나 조회할 때 원하는 코드를 실행할 수 있음
const numbers2 = {
    a : 1,
    b : 2,
    // getter 함수 만들기
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        // get 함수에서는 무조건 값을 반환해야함
        return this.a + this.b;
    }
}

console.log(numbers2.sum); // sum 함수가 실행됩니다. 3

numbers2.b = 5;
console.log(numbers2.sum); // sum 함수가 실행됩니다. 6


// setter 함수 만들기
const dog = {
    // _바를 끼운 이유는 setter함수와 겹치지 않게 하기 위해 햇음
    _name : '멍멍이',
    get name() {
        console.log('._을 조회합니다.');
        return this._name;
    },
    // setter 함수 만들기
    // 파라미터 값을 무조건 받아와야함 -> value
    set name(value) {
        console.log('이름이 바뀝니다.'); + value
        this._name = value;
    }
};

console.log(dog._name); 
dog.name = '뭉뭉이';
console.log(dog._name); 

// 결과값 : 멍멍이 이름이 바뀝니다. 뭉뭉이




const numbers3 = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    // numbers3.a를 조회하면 ,_a의 값을 조회할 수 있게 해줌
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },

    set a(value) {
        this._a = value;
        // 함수 업데이트해줌 = 함수호출
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers3.sum); // 3
numbers3.a = 5; // value값이 들어가기 때문에 setter 발동 -> _.a에 5가 들어감
numbers3.b = 7;
numbers3.a = 9;
console.log(numbers3.sum); // 16