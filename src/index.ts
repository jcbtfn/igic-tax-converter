function tax_conversion (amount_to_convert: number, input_tax: string, output_tax: string): number {
    if (amount_to_convert === 0) {
        return 0;
    };
    if (input_tax.match(output_tax)) {
        return amount_to_convert;
    };
    console.log("tax_conversion called");
    return -1;
}

function tax_strip (amount_to_strip: number, tax_to_strip: string): number{
    return 0;
};

module.exports = tax_conversion;

//tax_conversion(0, "a", "b")