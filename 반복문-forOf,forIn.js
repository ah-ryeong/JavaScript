// for of -> 주로 배열을 다룰때 사용함
// 배열 안에 있는 것들을 사용해서 작업해야할 때 쓴다.
const numbers = [10, 20, 30, 40, 50, 60];

for(let number of numbers) {
    console.log(number); // 10, 20, 30, 40, 50, 60
}


// for in -> 객체에 대한 반복문을 처리할 때 자주 사용한다.
// 객체 정보를 배열에 받아오는 법 
const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : 2
}
// key 값을 배열로 받아오기
console.log(Object.entries(doggy)); // 배열형태로 반환, 배열 속에 key, values 있음
console.log(Object.keys(doggy)); // ["name", "sound", "age"]
console.log(Object.values(doggy)); // ["멍멍이", "멍멍", 2]

for(let key in doggy) {
    console.log(key); // name sound age
    console.log(`${key} : ${doggy[key]}`); // name: 멍멍이 sound: 멍멍 age: 2
}