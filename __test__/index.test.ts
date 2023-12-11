const tax_conversion_test = require('../src/index');

describe("returns 0 if the input is 0", () => {
    test("returns 0 if the amount is 0, input tax is IVA and output tax is IGIC", () => {
        expect(tax_conversion_test(0, "IVA", "IGIC")).toBe(0);
    });
    test("returns 0 if the amount is 0, input tax is IGIC and output tax is IVA", () => {
        expect(tax_conversion_test(0, "IGIC", "IVA")).toBe(0);
    });
    test("returns 0 if the amount is 0, input tax is NONE and output tax is NONE", () => {
        expect(tax_conversion_test(0, "NONE", "NONE")).toBe(0);
    });
});

describe("returns the same input amount if tax values are the same", () => {
    test("returns 1234 if the input is 1234 and input tax and output tax are IVA", () => {
        expect(tax_conversion_test(1234, "IVA", "IVA")).toBe(1234);
    });
    test("returns 50 if the input is 50 and input tax and output tax are IGIC", () => {
        expect(tax_conversion_test(50, "IGIC", "IGIC")).toBe(50);
    });
    test("returns 999 if the input is 999 and input tax and output tax are NONE", () => {
        expect(tax_conversion_test(999, "NONE", "NONE")).toBe(999);
    });
})
