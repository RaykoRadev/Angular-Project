abstract class Melon {
    weight: number;
    melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    getElementIndex() {
        return this.elementIndex;
    }

    toString() {
        return `Element: Water\nSort: ${
            this.melonSort
        }\nElement Index: ${this.getElementIndex()}`;
    }
}

class Firemelons extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    getElementIndex() {
        return this.elementIndex;
    }

    toString() {
        return `Element: FIre\nSort: ${
            this.melonSort
        }\nElement Index: ${this.getElementIndex()}`;
    }
}

class Earthmelons extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    getElementIndex() {
        return this.elementIndex;
    }

    toString() {
        return `Element: Earth\nSort: ${
            this.melonSort
        }\nElement Index: ${this.getElementIndex()}`;
    }
}

class Airmelons extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    getElementIndex() {
        return this.elementIndex;
    }

    toString() {
        return `Element: Air\nSort: ${
            this.melonSort
        }\nElement Index: ${this.getElementIndex()}`;
    }
}

class Melolemonmelon extends Watermelon {
    private elementArr: string[];
    private element: string;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementArr = ["Water", "Fire", "Earth", "Air"];
        this.element = this.morph();
    }

    morph(): string {
        let elm = this.elementArr.shift();
        this.elementArr.push(elm!);

        return elm!;
    }

    toString() {
        return `Element: ${this.element}\nSort: ${
            this.melonSort
        }\nElement Index: ${this.getElementIndex()}`;
    }
}

// let test: Melon = new Melon(100, "Test");
//Throws error

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
