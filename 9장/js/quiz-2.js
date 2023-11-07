class pet{

    constructor(name, color, done = false){
        this.name = name;
        this.color = color;
    }
    run(){
        document.write(`<h1>${this.color} ${this.name}가 달린다.`);
    }
   
}

const pet1 = new pet("바둑이","하얀");
pet1.run();



class Cat extends pet{
    constructor(name, color, breed) {
        super(name, color); 
        this.breed = breed; 
    }
    viewInfo() {
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}.`);
    }
}

const pet2 = new Cat("보리", "흰색", "페르시안 친칠라");
pet2.viewInfo();
pet2.run();
