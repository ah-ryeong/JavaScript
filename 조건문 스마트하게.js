// 특정 값이 여러 값 중 하나인지 확인
function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

// 위 코드 더 간단하게 사용
function isAnimal2(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
}
// 화살표 함수로 작성
// const isAnimal2 = (text) =>['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal2('개')); // true

// 값에 따라 다른 결과물 발생
function getSound(animal) {
    if(animal === '개') return '멍멍!';
    if(animal === '고양이') return '야옹!';
    if(animal === '참새') return '짹짹!';
    if(animal === '비둘기') return '구구 구 구!';
    
    return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구!
console.log(getSound('인간')); // ...?

// 위 코드를 좀 더 깔끔하게 수정
function getSound2 (animal) {
    const sound = {
        개 : '멍멍!',
        고양이 : '야옹!',
        참새 : '짹짹!',
        비둘기 : '구구 구 구!'
    };
    return sounds[animal] || '...?';
}

console.log(getSound2('개')); // 멍멍!
console.log(getSound2('비둘기')); // 구구 구 구!
console.log(getSound2('인간')); // ...?

// 조건에 따라 해야하는 일이 달라진다면 객체를 사용하면 더 좋음
function makeSound(animal){
    const tasks = {
        개 : () => {
            console.log('멍멍!');
        },
        고양이 : () => {
            console.log('야옹!');
        },
        비둘기 : () => {
            console.log('구구 구 구!');
        }
    }

    const task = task[animal];

    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('개');
makeSound('비둘기');
makeSound('인간');