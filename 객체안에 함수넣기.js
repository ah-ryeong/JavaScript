const dog = {
    name : '멍멍이',
    sound :'멍멍!',
    say : function say() {
        // 여기서 this는 함수가 위치한 객체, 자기 자신을 의미한다.
        console.log(this.sound);
    }
}

// const dog = {
//     name : '멍멍이',
//     sound :'멍멍!',
//     // say 이름 생략해도 괜찮음
//     say : function() {
//         // 여기서 this는 함수가 위치한 객체, 자기 자신을 의미한다.
//         console.log(this.sound);
//     }
// }

// const dog = {
//     name : '멍멍이',
//     sound :'멍멍!',
//     // 이렇게 간단하게 작성해도 동작함
//     say() {
//         // 여기서 this는 함수가 위치한 객체, 자기 자신을 의미한다.
//         console.log(this.sound);
//     }
// }

const dog = {
    name : '멍멍이',
    sound :'멍멍!',
    // 화살표 함수로 하면 동작 X
    say : () => {
        // 여기서 this가 뭔지 몰라서 작동안함
        console.log(this.sound);
    }
}

// function 키워드로 만든 함수는 자기가 속해있는 곳을 가르킨다.
// 화살표 함수는 this를 자기가 속해있는 곳으로 연결을 하지 않는다.

dog.say(); // 멍멍


const cat = {
    name : '야옹이',
    sound : '야옹!'
}

// cat.say에다가 dog.say를 연결해줌
// function으로 선언한 경우 값이 나오고 화살표 함수는 X
cat.say = dog.say;

cat.say(); // 야옹!

const catSay = cat.say;
catSay(); // undefined