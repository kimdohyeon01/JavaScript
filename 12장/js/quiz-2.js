const btn = document.querySelector("button");
const result = document.querySelector("#result");
const num = document.querySelector("#user-number");

btn.addEventListener("click", () => {
    let usernum = num.value;
    try{
        if (usernum === "" || isNaN(usernum)){
            throw "숫자를 입력하세요";
        }
            

        usernum = Number(usernum);

        if(usernum <= 10){
            result.innerText = usernum;
        }
            

        if(usernum > 10){
            throw "10보다 작은 수를 입력하세요.";
        }
                
    }catch(error){
        alert(error);
    }finally{
        result.value = " ";
    }
});
