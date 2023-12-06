export class Unit {
    _amount: number;
    _baseUnit: Unit | null;
    _baseUnitAmount: number;

    constructor(amount: number, baseUnit: Unit | null) {
        this._amount = amount;
        this._baseUnit = baseUnit;
        this._baseUnitAmount = this._calculateBaseUnitAmount();
    }

    _calculateBaseUnitAmount() {
        if (!this._baseUnit) {
            return this._amount;
        }
        return this._baseUnit.getBaseAmount(this._amount);
    }

    getBaseAmount(amount: number) {
        return amount * this._baseUnitAmount;
    }
}

export const tsp = new Unit(1, null);
export const tbl = new Unit(3, tsp);
export const cup = new Unit(2, tbl);
export const foo = new Unit(4, cup);
export const bar = new Unit(2, foo);
