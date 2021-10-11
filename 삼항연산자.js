// 삼항연산자 -> condition ? true : false

const array = [];
let text = '';

// 삼항 연산자 없이 코드 작성
if(array.length === 0) {
    text = '배열이 비어있습니다';
} else {
    text = '배열이 비어있지 않습니다.'
}

console.log(text);

// 위 코드를 삼항연산자로 작성
let text = array.length === 0 
    ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다'
console.log(text);

// 삼항연산자를 좀 더 중첩해서 사용할 수 있다.
const condition1 = false;
const condition2 = false;

// 하지만 이런 코드는 보기 힘들기 때문에 작성하지 않는게 좋음 
// 삼항연산자는 한줄에 쓸 수 있을 때 사용하는게 좋다.
const value = condition1 
    ? '와우!'
    : condition2 
        ? 'blabla'
        :  'foo'

console.log(value); // foo