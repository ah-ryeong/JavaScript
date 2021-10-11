const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attributes: 'cute'
};

const purpleCuteSlime = cuteSlime;
purpleCuteSlime.color = 'purple';

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 배열에도 사용 가능
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기']; // = animals.concat('비둘기);

console.log(animals);
console.log(anotherAnimals);

// 여러개도 사용 가능
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
