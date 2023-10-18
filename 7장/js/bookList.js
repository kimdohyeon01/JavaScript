const title = document.querySelector("#title"); 
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const booklist = document.querySelector("#bookList")

//버튼을 클릭하면
save.addEventListener("click", (e) => {
    e.preventDefault(); // 버튼을 누르면 서버로 보내지 않음.
    // 제목과 저자 정보를 출력.
    // 리스트 요소 만들기
    const item = document.createElement("li");
    // item에 내용 넣기
    item.innerHTML = `${title.value} - ${author.value} <span class=delbtn>삭제</span>`;
    

    // 정보 영역에 추가
    booklist.appendChild(item);

    // input text 상자의 내용 지우기.
    title.value="";
    author.value="";

    // 목록에서 제거하기
    // 삭제 버튼 요소를 모드 가져온다.
    const delbtns = document.querySelectorAll(".delbtn");

    // 삭제 버튼을 누를떄 마다 삭제한다.
    for(let delbtn of delbtns){
        delbtn.addEventListener("click", function() {
    
            this.parentNode.remove();  
        });
    };

});