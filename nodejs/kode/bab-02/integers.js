var binaryInt = 0b010101000,
    octalInt = 07,
    decimalInt = 34,
    hexInt = 0xAA;

console.log("Nilai inisialisasi");
console.log("==================\n");
console.log("Binary: " + binaryInt);
console.log("Octal: " + octalInt);
console.log("Decimal: " + decimalInt );
console.log("Hex: " + hexInt);
console.log("\nNilai setelah ditambah");
console.log("======================\n");
console.log("Binary + 2: " + (binaryInt + 2));
console.log("Octal + 8: " + (octalInt + 8));
console.log("Decimal + 11: " + (decimalInt + 11));
console.log("Hex + 0xE: " + (hexInt + 0xE));

// Hasil:
// Nilai inisialisasi
// ==================
//
// Binary: 168
// Octal: 7
// Decimal: 34
// Hex: 170
//
// Nilai setelah ditambah
// ======================
//
// Binary + 2: 170
// Octal + 8: 15
// Decimal + 11: 45
// Hex + 0xE: 184
