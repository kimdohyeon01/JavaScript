let xhr = new XMLHttpRequest();
let url = "https://reqres.in/api/products/10"; 
xhr.open("GET", url,true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){
        let product = JSON.parse(xhr.responseText)
        document.querySelector("#result").innerHTML = `
            <ul>
                <li>상품명 : ${product.data.name} </li>
                <li>생산년도 : ${product.data.year}</li>
            </ul>
        `;
    }
}
