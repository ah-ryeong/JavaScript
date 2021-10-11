// 객체생성자 : 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값 또는 함수를 구현할 수 있게 해준다.
function Animal (type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// 값을 재사용하고 싶은 경우 prototype을 사용 
// 객체생성자로 무언가를 만들었을 때 그것을 만든 객체들 끼리 공유 할 수 있는 
// 할 수 있는 값이나 함수를 자바스크립트의 객체생성자로 만든 
// 함수에 프로토 타입으로 설정해줄 수 있다.
Animal.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹