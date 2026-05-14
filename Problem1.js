const input = "72-101-108-108-111";
const result = input.split("-").map(code => String.fromCharCode(Number(code))).join("");
console.log(result);