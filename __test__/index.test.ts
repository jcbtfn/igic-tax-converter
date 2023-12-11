const tax_conversion_test = require('../src/index');

test('return 0 if the amount is 0, independently of tax values', () => {
    expect(tax_conversion_test(0, "IVA", "IGIC")).toBe(0);
    expect(tax_conversion_test(0, "IGIC", "IVA")).toBe(0);
});

test('return the same amount if tax values are the same', () => {
    expect(tax_conversion_test(0, "IVA", "IVA")).toBe(0);
    expect(tax_conversion_test(50, "IGIC", "IGIC")).toBe(50);
    expect(tax_conversion_test(999, "NONE", "NONE")).toBe(999);
});