class food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name} 을 파는 음식점들 : `);
        console.log(this.brands.join(','));
    }
}

const pizza = new food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new food('치킨');
chicken.addBrand('BBQ');
chicken.addBrand('BHC');

pizza.print(); // 피자 을 파는 음식점들 :피자헛, 도미노피자
chicken.print() // 치킨 을 파는 음식점들 : BBQ, BHC