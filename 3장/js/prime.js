// 소수 판단 스크립트

const num = parseInt(prompt("숫자입력"))
let isPrime;

if (num === 1 )
    document.write(`${num}은 소수도 합성수도 아닙니다.`)

else if (num === 2)
    isPrime=true;

else //1,2가 아닌 나머지 값을 입력하면
{
    for(i = 2; i<=num; i++) //입력 받은 수까지 반복하면서
    {
        if(num % i === 0)
        break; // 나머지가 0이면 반복을 멈춘다/
    }
}
if (num === i)     //반복문 종료 후 입력 값과 나눈값을 빅교하여 같으면 
    document.write(`${num}는 소수입니다.`)
else 
    document.write(`${num}는 소수가 아닙니다.`)
    
/*
else
{
    for(let i = 2; i<num; i++)
    {
        if (num % i === 0)
        {
            isPrime = false;
            break;
        }       
        else
        {
            isPrime=true;
        } 
        
    }

    if (isPrime){
        document.write(`${num}은 소수입니다.`)
    }
    else
    {
        document.write(`${num}은 소수가 아닙니다.`)
    }
}
*/
