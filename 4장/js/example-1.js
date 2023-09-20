// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수.

function multiple(x, y){
    let sum = x * y;

    return sum;
}

let num1 = parseInt(prompt("첫번쨰 숫자를 입력해주세요"))

let num2 = parseInt(prompt("두번쨰 숫자를 입력해주세요"))

document.write(`${num1}와 ${num2}의 곱은 ${multiple(num1,num2)}입니다.`);