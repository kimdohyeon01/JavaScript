function hello1(name, message){
    console.log(`${name}님, ${message}`);
}

hello1("김도현","안녕하세요");
hello1("홍길동");

function hello2(name, message="반갑습니다"){
    console.log(`${name}님, ${message}`);
}

hello2("김도현","안녕하세요");
hello2("홍길동");

// 전개구문 ...변수명
// 나머지 매개 변수로 사용할 때
// 매개변수를 고정하기 어려울 경우에 전개 구문으로 변수 하나 지정.
function addNum(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

console.log("addNum(1,10) :" , addNum(1,10))
console.log("addNum(1,2,3,4,5,6,7,8,9,10) :" , addNum(1,2,3,4,5,6,7,8,9,10))

// 전개구문으로 배열과 배열을 연결 가능.
let animal = ["bird", "dog", "cat"];
let fruits = ["apple", "banana", "mango"];

// 기존 배열 연결 방식 : concat()
console.log("animal 과 fruits 연결 : ",animal.concat(fruits));
console.log("[...animal, ...fruits] : ",[...animal, ...fruits]);

// 배열 복사하기 => 값이 모두 바뀐다,.
console.log("fruits : ", fruits)
let fruits2 = fruits;
fruits2[1] = "grape";

console.log("fruits",fruits)
console.log("fruits",fruits2)

// 배열의 내용만 복사하기 -> 전객문을 사용.
console.log("fruits3: ", fruits)
let fruits3 = [...fruits]
console.log("fruits3 : ", fruits3)

fruits3[1] = "orange"

console.log("fruits : ", fruits);
console.log("fruit3s : ", fruits3);


// 객체 프로퍼티
// 객채 프로퍼티에 접근 .(점)표기법 사용.
// ES2015 이후에는 [](대괄호)를 사용할 수 있다.
const book ={
    title : "JavaScript",
    papes : 650
} 
// "punlished date" 프로퍼티 추가.
//book.punlished date = "2023-11" // 신텍스 에러 -> 띄어쓰기 때문에.

// [] 표기법으로 사용하면 가능.
book["punlished date"] = "2023-11"
console.log("book : ",book);

// ES2015부터는 함수나 계산식을 프로퍼티 이름으로 사용 가능.
function fn(){
    return "result"; // 함수의 리턴값이 프로퍼티 됨
}
const obj1 = {
    [fn()] : "함수 키" // 함수를 프로퍼티로 사용.
}

console.log("obj1: ",obj1)

function add(a, b){
    return a+b;
}
const obj2 = {
    [`${add(10,20)}`] : "계산식 식 "
}

console.log("obj2: ",obj2)

// 객체 생성 시 객체 밖에서 점 표기법으로 프로퍼티 이름과 값이 지정가능.
let student = {
    name : "김도현"
}
student.age = 25;
console.log("student : " ,student);

// 변수에 저장된 값을 프로퍼티 로 사용해야 할 경우가 있아
// 프롬포트 창으로 입력 받아 그 값을 프로퍼티에 사용하는 경우
// 이떄 생성자 함수로 객체를 정의하여 사용 할 수가 ㅇㅆ가
function makeUser(name,age) {
    return {
        name : name,
        age : age // 변수와 프로퍼티 이름이 같다
    }
}

let user1 = makeUser("김도현",25)
//console.log("user1 : " user1)

// 위 코드에서 객체 정의 할떄 변수와 프로퍼티 이름이 같다면
// 줄여서 사용 가능하다.
function makeUser(name,age) {
    return {
        name,
        age  // 프로퍼티값 단축 이라고 함.
    }
}

let user2 = makeUser("김도현",25)
//console.log("user1 : " user2)

// 객체에서 심벌키 사용
// Symbol => ES2015 이후에 추가된 원시 자료형,
// 한번 정의하면 값을 변경 할 수 없다.
let user_id1 = Symbol() // 유일 한 값 
let user_id2 = Symbol() // 

console.log("user_id1 === user_id2 : ", user_id1 === user_id2)

// 심벌을 사용하여 프로퍼티 정의하기
// 프라이빗 객체. => 외부에서 프로퍼티를 알 수 없다.
const id = Symbol("id")
const tel = Symbol("tel number")

const member = {
    name : "김도현",
    age : 23,
    [id] : 202095009,
    [tel] : function(){
        alert(prompt("전화번호 : "));
    }
}

for(item in member){
    console.log(`${item} : ${member[item]}`);
}

// 심벌키에 접근
// [](대괄호)를 사용하여 프로퍼티나 메서드에 접근.
// 메서드 []()
console.log("member[id] :",member[id])
//console.log(member[tel]())

// 심벌은 만들 떄마다 유일한 값을 가진다,
// 상활에 따라 만든 심벌을 다른 곳에서 사용해야 할 경우가 있다.
// 여러 곳에서 같이 사용할 수있는 심벌을 전역 심벌이라고 한다.
// Symbol.for()메서드
let tel_num = Symbol.for("tel_num");
let phone = Symbol.for("tel_num");

console.log("tel_num === phone : ", tel_num === phone)

// Symbol.keyfor()메서드
// 전역 심벌의 키를 찾는다.
console.log("Symbol.keyFor(phone) : ", Symbol.keyFor(phone))



/*
    프로퍼티 단축 표기법 => name : name
        객체 리터럴에서 사용.
        직접 할당. 주로 단단한 객체 초기화에 사용.
        this.me
        */