//js oop

//objektum
// let cardItem = {
//     name: "körte",
//     count: 3,
//     price: 20,
//     totalPrice: 60
// }

// cardItem.valami = 2;

// console.log(cardItem);

//Osztály
class CardItem {
    //konstruktor
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
        this.totalPrice = count * price;
    }

    //Setter
    SetCount(value){
        this.count = value;
        this.totalPrice = this.count * this.price;
    }
    //Getter
    GetTotalPrice(){
        return this.count*this.price;
    }
    //Metódus
    Render() {
        //...
        console.log("render")
    }

}

//példányosítás
let cardItem_1 = new CardItem("körte", 3, 20);
cardItem_1.SetCount(10);
console.log(cardItem_1);

// cardItems = [];
// cardItems.push(new CardItem("körte", 3, 20))
// cardItems.push(new CardItem("alma", 6, 40))
// cardItems.push(new CardItem("dió", 2, 100))
// cardItems.push(new CardItem("dinnye", 1, 65))

// console.log(cardItems);
//Meghívom a metódust
cardItem_1.Render();
