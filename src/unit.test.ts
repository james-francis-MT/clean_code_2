import { Unit } from "./Unit";

test("baseUnit null returns correct base units", () => {
    const tsp = new Unit(1, null);
    expect(tsp.getBaseAmount(1)).toBe(1);
    expect(tsp.getBaseAmount(2)).toBe(2);
    expect(tsp.getBaseAmount(3)).toBe(3);
});

test("baseUnit tsp returns correct base units", () => {
    const tsp = new Unit(1, null);
    const tbl = new Unit(3, tsp);
    expect(tbl.getBaseAmount(1)).toBe(3);
    expect(tbl.getBaseAmount(2)).toBe(6);
});
