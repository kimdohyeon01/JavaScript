// 제목 가져오기
const title = document.querySelector("#title"); 

// 아이디가 title인 요소를 클릭하면 배경생과 글자색을 수정
title.onclick = () => {
    title.style.backgroundColor = "black";
    title.style.color = "orange";
}