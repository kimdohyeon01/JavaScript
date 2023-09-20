// 1~전달 받은 수까지 합계를 계산하는 함수
// 함수 선언
function calcsum(num){
    let sum = 0;

    for (let i = 1; i<=num; i++){
        sum+=i;
    }
    return sum; // 함수를 호출한 곳으로 돌려 줌.
}


// 사용자로부터 정수 입력 받기
let number = parseInt(prompt("정수 입력(몇가지 더할까요?)"));

// 입력 받은 수를 인수로 함수 호출
document.write(`<h1>1부터 ${number}까지 합은 ${calcsum(number)}입니다.<h1>`);