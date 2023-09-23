class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
        this.bacon = bacon;
    }
}

const myPizza = new Pizza('large', true, true, false, true);

////////////////////////////////////////////////
////////////////////////////////////////////////


class Pizza_ {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(builder: PizzaBuilder_) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
        this.bacon = builder.bacon;
    }
}

class PizzaBuilder_ {
    size: string;
    cheese: boolean = false;
    pepperoni: boolean = false;
    mushrooms: boolean = false;
    bacon: boolean = false;

    constructor(size: string) {
        this.size = size;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addMushrooms() {
        this.mushrooms = true;
        return this;
    }

    addBacon() {
        this.bacon = true;
        return this;
    }

    build() {
        return new Pizza_(this);
    }
}

const myPizza_ = new PizzaBuilder_('large')
    .addCheese()
    .addPepperoni()
    .addBacon()
    .build();
