// Write your code here
// Creates a class of breakfast
class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

// Creates a class of lunch
class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup  = soup;
        this.drink = drink;
    }
}

// Creates a class of dinner
class Dinner{
    // Dessert is a private field
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad  = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}