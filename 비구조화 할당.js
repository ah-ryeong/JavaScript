const object = {a: 1};

function print ({a, b = 2}) {
    console.log(a);
    console.log(b);
}

print(object);

const animal = {
    name: '멍멍이',
    type : '개'
};

const { name: nickname } = animal;

console.log(nickname); // 멍멍이

// 배열 비구조화 할당
const array = [1 ,2];

const { one, two } = array;

console.log(one); // 1
console.log(two); // 2

// 객체의 깊숙한 곳에 들어있는 것을 꺼낼 수 있음
const deepObject = {
    state: {
        information: {
            name : 'winter',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value : 5
}

const {name , languages } = deepObject.state.information;
const {value } = deepObject;

// 다른 방법으로 빼오기
const { 
    state : {
        information: {
            name, languages 
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
}

console.log(extracted); 