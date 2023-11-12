/**
 * START: Follow the instructions below.
 */

class Currency {
    protected readonly name: string;
    private readonly code: string;
    private readonly symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public describe(): void {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// Alter this class to extend the `Currency` class.

class DetailedCurrency extends Currency {

    // Define a private field named `banknotes`.
    // Set the field type so it can be used to store an array of numbers.
    private backnotes: number[] = [];


    // Add a `banknotes` parameter with the same type as the `banknotes` field.

    constructor(name: string, code: string, symbol: string, backnotes: number[]) {
        // Fix this call to the parent constructor.

        super(name, code, symbol);

        // Store the value of the `banknotes` parameter in the corresponding field.
        this.backnotes = backnotes;

    }

    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.

    public describeBankNotes():void {
        // Change the visibility of the parent class `name` field so
        // that its value can be read here in this child class method.

        let description = `The ${this.name} currency uses the banknotes `;

        // Replace `null` with the value of the `banknotes` field.

        description += this.backnotes;

        console.log(description);
    }

}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

euroCurrency.describe();

euroCurrency.describeBankNotes();