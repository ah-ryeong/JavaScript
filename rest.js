// rest : 객체, 배열, 함수의 파라미터에서 사용 가능하다.
// spread와 반대의 개념 , 퍼져있는 것 들을 모아오는 역할을 한다.

// 객체에서 사용
const purpleCuteSlime = {
    name: '슬라임',
    attributes: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // color를 제외한 객체가 들어온다.

// rest 에서 attributes까지 없애고 싶다면
const { attributes, ...slime } = cuteSlime;
console.log(slime);

// 배열에서 사용
const numbers = [1, 2, 3, 4, 5, 6];

const { one, two, ...rest } = numbers;
console.log(one); // 0
console.log(two); // 1
console.log(rest); // [2, 3, 4, 5, 6]
// ** const {...rest, last} = numbers 이렇게는 안 됨, rest가 앞에 올 수 없음
