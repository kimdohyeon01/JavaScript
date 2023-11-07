// 생성자 함수 만들기
// function Cylinder(cylinderDimeter, cylinderHeight){
//     this.diamter = cylinderDimeter;  //지름
//     this.height = cylinderHeight;  //높이

//     //부피 계산 메소드
//     this.volume = function(){
//         //반지름 계산
//         let radius = this.diamter/2
//         //부피 계산 = 반지름 * 반지름 * 파이 * 높이
//         return (Math.PI * radius * radius * this.height).toFixed(2);
//     }
// }

//클래스 만들기
class Cylinder{
    constructor(cylinderDimeter, cylinderHeight){
        this.diamter = cylinderDimeter;
        this.height = cylinderHeight;

    }
    volume(){
        let radius = this.diamter/2
        return (Math.PI * radius * radius * this.height).toFixed(2);
    }
}

const btn = document.querySelector("button");
const result = document.querySelector("#result");
// const diamter = document.querySelector("#cyl-diameter");
// const height = document.querySelector("#cyl-height");

btn.addEventListener("click", function(event){
    event.preventDefault();

    const diamter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

    // 빈칸인지 아닌지 체크
    if(diamter === "" || height === ""){
        result.innerText = "지름, 높이 값을 모두 입력하세요";
    }
    else{
        //객체생성
        let cylinder = new Cylinder(parseInt(diamter),parseInt(height));

        //계산결과 result에 표시
        result.innerText = `지름 ${diamter}, 높이${height}인 원기둥의 부피는 ${cylinder.volume}입니다`
    }

   

})