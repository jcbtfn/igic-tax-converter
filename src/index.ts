const taxes_table: Record<string, number> = {
    "NONE": 0,
    "IVA": 21,
    "IVA_REDUCIDO": 10,
    "IVA_SUPERREDUCIDO": 4,
    "IVA_EXCENTO": 0,
    "IGIC_ESPECIAL_INCREMENTADO": 13.5, 
    "IGIC_INCREMENTADO": 9.5,
    "IGIC": 7,
    "IGIC_REDUCIDO": 3,
    "IGIC_TIPO_CERO": 0
}

function tax_conversion (amount_to_convert: number, input_tax: string, output_tax: string): number {
    if (amount_to_convert === 0) {
        return 0;
    };
    if (input_tax.match(output_tax)) {
        return amount_to_convert;
    };
    let amount_without_taxes = amount_to_convert;
    if (!input_tax.match("NONE" || "IVA_EXCENTO" || "IGIC_TIPO_CERO")) {
        amount_without_taxes = tax_strip(amount_to_convert, input_tax);
    }
    if (output_tax.match("NONE" || "IVA_EXCENTO" || "IGIC_TIPO_CERO")) {
        return amount_without_taxes;
    }
    console.log("tax_conversion called");
    return -1;
}

function tax_strip (amount_to_strip: number, tax_to_strip: string): number{
    return (amount_to_strip - amount_to_strip*(taxes_table[tax_to_strip]/100));
};

module.exports = tax_conversion;

//tax_conversion(0, "a", "b")