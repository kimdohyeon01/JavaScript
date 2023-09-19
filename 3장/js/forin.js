const student ={
    //key    value
    major : "컴퓨터공학부",
    idNum : 202095009,
    name : "김도현"

}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`)
}