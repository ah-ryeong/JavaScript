function calculateCircleArea( r = 1) {
    return Math.PI * r * r;
}
// 위 function 을 아래와 같이 써줄 수 있다.
// const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669

const area2 = calculateCircleArea();  // 3.141592653589793

