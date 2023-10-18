// 리스트를 클릭하면 해당 리스트 내용 삭제하기
// 리스트의 모든 항목을 가져온다.
const items = document.querySelectorAll("li");

for(let item of items){
    item.addEventListener("click", function() {
        // 해당 항목을 클릭했을때 그 항목이 삭제됨 

        // this는 이벤트가 발생한 노드를 가르킴
        // 화살표 함수가 아닌 익명 함수를 사용해야 한다.(정해진 것임)
        // 화살표 함수를 사용시 최상위를 가르키기 때문에 무엇이 나인지 알수없음

        // 나 자신 삭제 
        //this.remove(this);  
        // 부모노드에서 삭제 
        this.parentNode.removeChild(this);
    });
};