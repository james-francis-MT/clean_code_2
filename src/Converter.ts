import { Quantity } from "./Quantity";
import { Unit, tbl, tsp } from "./Unit";

export class Converter {
    convert(amount: number, oldUnit: Unit, newUnit: Unit): Quantity {
        return new Quantity(
            oldUnit.getBaseAmount(amount) / newUnit.getBaseAmount(amount),
            newUnit
        );
    }
}

export class VolumeConverter extends Converter {
    _validUnits: Unit[] = [tsp, tbl];

    convert(amount: number, oldUnit: Unit, newUnit: Unit): Quantity {
        this._validate(oldUnit);
        this._validate(newUnit);
        return super.convert(amount, oldUnit, newUnit);
    }

    _validate(unit: Unit) {
        if (!this._validUnits.includes(unit)) {
            throw new Error("invalid conversion");
        }
    }
}
