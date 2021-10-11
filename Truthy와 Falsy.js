// Truthy : true 같은거
// Falsy : false 같은거
function print(person) {
    if(!person) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(); 

// 전부 falsy한 값으로 인식되기 때문에 ! 붙이면 true로 나옴
// 이 값들을 제외한 것들은 Truthy한 것으로 인식된다.
console.log(!undefined); // true
console.log(!null); //true
console.log(!0); // true
console.log(!''); //true
console.log(!NaN); // true