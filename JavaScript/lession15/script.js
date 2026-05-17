// class Car {
//     constructor(brand, color, year, price=1000, ...otherParams){
//         this.brand = brand;
//         this.color = color;
//         this.year = year;
//         this.price = price;
//         this.otherOptions = otherParams;
//     }
// };

// const Car1 = new Car("BMW", "red", 2020);
// const Car2 = new Car("Skoda", "grey", 2009, 5000);
// const Car3 = new Car("Skoda", "grey", 2009, 5000, "tempomat", "hybrid", "sedan");
// console.log(Car3);


class Car {
    constructor(brand, color, year, price=1000, ...otherParams){
        this.brand = brand;
        this.color = color;
        this.year = year;
        this._price = price;
        this.otherOptions = otherParams;
    }

    getInfo() {
        return `Это автомобиль марки ${this.brand}, цвет ${this.color}, дополнительнве опции ${this.otherOptions}`
    }

    getTax() {
        return this.price * 0.21;
    }

    static compare(carA, carB){
        // if()
        return `Сравнения комплектаций автомобилей марки ${carA.brand} и ${carB.brand} ${carA.otherOptions} ${carB.otherOptions}`
    }
};

const Car3 = new Car("Skoda", "grey", 2009, 5000, "tempomat", "hybrid", "sedan");
const Car4 = new Car("Ford", "blue", 2019, 7000);
console.log(Car3._price); 

Car3._price = 13
console.log(Car3._price);

const cars = []; // TODO
for(let i = 0; i < cars.length; i++){
    cars.push({
        brand: "Model - " + i,
        price: 10000
    })
}


// console.log(Car3.getInfo());
// console.log(`Налог на покупку автомобиля ${Car3.brand} cсостовляет ${Car3.getTax()} kc`)
// console.log(Car.compare(Car3, Car4));

// Car3.brand = "Toyota";
// console.log(Car3)