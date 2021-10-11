function sumOf(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // numbers안의 배열을 증가시키고 sum에다가 1을 더해줌
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result); // 15

// 숫자로 이루어진 배열이 주어졌을 때, 
// 해당 숫자 배열안에 들어있는 숫자 중 3보다
//  큰 숫자로만 이루어진 배열을 새로 만들어라

function biggerThanThree(numbers2) {
    // 구현해보기 
    const res = [];
    for(i = 0; i < numbers2.length; i++) {
        if(numbers2[i] < 3) {
            res.push(numbers2[i]);
        }
    }
    return res;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2)); // [4, 5, 6, 7]