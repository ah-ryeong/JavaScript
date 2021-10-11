const array = [1, 2, 3, 4, 5];
console.log(array); // [1, 2, 3, 4, 5]

const array2 = [1, 'blabla', {}, 4];
// 첫번째 항목 검색
console.log(array2[0]); // blabla

// 객체로 만들어진 배열
const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
];
console.log(objects); // [Object, Object]
console.log(objects[0]); // Object {name: "멍멍이"}

// 배열에 새로운 항목 추가 push
objects.push({name: '멍뭉이'});
console.log(objects); 

// 크기를 조회(몇개가 있는지 확인) length
console.log(objects.length); // 3