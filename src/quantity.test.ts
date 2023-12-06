import { tbl, tsp, cup, foo, bar } from "./Unit";
import { Quantity } from "./Quantity";
import { VolumeConverter } from "./Converter";

test("the same tsp quantities are equal", () => {
    const quantity1 = new Quantity(1, tsp);
    const quantity2 = new Quantity(1, tsp);

    expect(quantity1.isEqual(quantity2)).toBe(true);
});

test("different quantities of the same unit are not equal", () => {
    const quantity1 = new Quantity(1, tsp);
    const quantity2 = new Quantity(2, tsp);

    expect(quantity1.isEqual(quantity2)).toBe(false);
});

test("the same tbl quantities are equal", () => {
    const quantity1 = new Quantity(1, tbl);
    const quantity2 = new Quantity(1, tbl);

    expect(quantity1.isEqual(quantity2)).toBe(true);
});

test("3 tsp is equal to 1 tbl", () => {
    const quantity1 = new Quantity(3, tsp);
    const quantity2 = new Quantity(1, tbl);

    expect(quantity1.isEqual(quantity2)).toBe(true);
});

test("1 cup is equal to 6 tsp", () => {
    const quantity1 = new Quantity(6, tsp);
    const quantity2 = new Quantity(1, cup);

    expect(quantity1.isEqual(quantity2)).toBe(true);
});

test("10 cups is equal to 60 tsp", () => {
    const quantity1 = new Quantity(60, tsp);
    const quantity2 = new Quantity(10, cup);

    expect(quantity1.isEqual(quantity2)).toBe(true);
});

test("tsp plus tsp is equal to 2 tsp", () => {
    const quantity1 = new Quantity(1, tsp);
    const quantity2 = new Quantity(1, tsp);
    const quantity3 = new Quantity(2, tsp);

    expect(quantity1.add(quantity2).isEqual(quantity3)).toBe(true);
});

test("tbl plus tbl is equal to 2 tbl", () => {
    const quantity1 = new Quantity(1, tbl);
    const quantity2 = new Quantity(1, tbl);
    const quantity3 = new Quantity(2, tbl);

    expect(quantity1.add(quantity2).isEqual(quantity3)).toBe(true);
});

test("1 tsp plus 3 tsp is equal to tbl", () => {
    const quantity1 = new Quantity(1, tsp);
    const quantity2 = new Quantity(2, tsp);
    const quantity3 = new Quantity(1, tbl);

    expect(quantity1.add(quantity2).isEqual(quantity3)).toBe(true);
});

test("3 tsp plus tbl is equal to cup", () => {
    const quantity1 = new Quantity(3, tsp);
    const quantity2 = new Quantity(1, tbl);
    const quantity3 = new Quantity(1, cup);

    expect(quantity1.add(quantity2).isEqual(quantity3)).toBe(true);
});

test("can print name in different units", () => {
    const quantity1 = new Quantity(1, foo);

    expect(quantity1.toString(tsp)).toBe("24 tsp");
    expect(quantity1.toString(tbl)).toBe("8 tbl");
    expect(quantity1.toString(cup)).toBe("4 cup");
    expect(quantity1.toString(foo)).toBe("1 foo");
    expect(quantity1.toString(bar)).toBe("0.5 bar");
});

// test should live in converter.test.ts
test("throws if invalid conversion", () => {
    const quantity1 = new Quantity(1, foo, new VolumeConverter());

    expect(() => quantity1.toString(foo)).toThrow("invalid conversion");
});
