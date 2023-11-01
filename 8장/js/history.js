// 버튼가져오기
const back_btn = document.querySelector("#back");
const forward_btb = document.querySelector("#forward");

back_btn.addEventListener("click", () => {
    history.go(-1);
})

forward_btb.addEventListener("click", () => {
    history.go(1);
})