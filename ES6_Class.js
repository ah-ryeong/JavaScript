// Class 

class Animal {
    // constructor : 생성자
    constructo(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    // 함수를 만들면 자동으로 prototype을 만들어준다.
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('야오오오옹이', '야옹오옹');

dog.say();
cat.say();
cat2.say();
