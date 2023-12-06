import { Converter } from "./Converter";
import { Unit } from "./Unit";

export class Quantity {
    _amount: number;
    _unit: Unit;
    _converter: Converter;

    constructor(
        amount: number,
        unit: Unit,
        converter: Converter = new Converter()
    ) {
        this._amount = amount;
        this._unit = unit;
        this._converter = converter;
    }

    isEqual(other: Quantity): boolean {
        return (
            this._unit.getBaseAmount(this._amount) ===
            other._unit.getBaseAmount(other._amount)
        );
    }

    add(other: Quantity): Quantity {
        const totalBaseAmount =
            this._unit.getBaseAmount(this._amount) +
            other._unit.getBaseAmount(other._amount);

        return new Quantity(totalBaseAmount, new Unit(1, null));
    }

    toString(unit: Unit, readableName: string): string {
        const amountInNewUnit = this._converter.convert(
            this._amount,
            this._unit,
            unit
        );
        return `${amountInNewUnit} ${readableName}`;
    }
}
