function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 화살표 함수 쓸 때 async 사용하기
const getDog = async () => {
    await sleep(1000);
    return '멍멍이!';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

// 여러개의 프로세스를 차례대로 실행함
async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}

process();

// 여러개의 프로세스를 동시에 실행
// 이 중 하나라도 에러가 발생하면 에러 발생함
async function process2() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
}


process2(); // 3초 뒤 배열이 나옴 (turtle이 3초 뒤 실행이니까 한꺼번에 나와서 )

// 프로세스를 동시에 실행하면서 각각 따로 내고 싶은 경우
async function process3() {
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process3(); // 3초 뒤 하나씩 동시에 나옴 

// Promise.race : 가장 빨리 끝난 것 하나만 나타남
// 가장 빨리 끝난게 에러일 때에만 에러남 , 다른건 에러나도 에러난 걸로 안 쳐줌 
async function process4() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);
}

process4(); // 토끼