function sum (a, b, c, d, e, f, g) {
    return (a + b + c + d + e + f + g);
}

console.log(sum(1, 2, 3, 4, 5)); // NaN

function sum2 (...rest) {
    // 기본값 0으로 시작해서 0이라는 값이 acculater가 되고 
    // current는 값이 쭉 들어가져서 실행되는 것
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8)); // 36