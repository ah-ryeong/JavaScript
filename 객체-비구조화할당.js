const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const thor = {
    name : '토르 오딘손',
    actor : '크리스 햄스워드',
    alias : '토르'
}

// function print(hero) {
//     const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//     console.log(text);
// }

// 비구조화 할당 = 객체 구조분해
// function print(hero) {
//     // hero의 객체 내부에서 안의 값을 밖으로 빼와서 선언 
//     const { name, actor, alias } = hero;

//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//     console.log(text);
// }

// 더 나아가서 파라미터를 사용하는 단계에서도 사용할 수 있음.
// 특정 값들을 객체에서 빼오기 위해 간단하게 작성할 수 있어 유용하게 사용할 수 있다.
function print({ name, actor, alias }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(thor);