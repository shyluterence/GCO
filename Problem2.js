// create reg expression : https://regex-generator.olafneumann.org/?sampleText=2020-03-12T13%3A34%3A56.123Z%20INFO%20%20%5Borg.example.Class%5D%3A%20This%20is%20a%20%23simple%20%23logline%20containing%20a%20%27value%27.&flags=i

const input = `18 24 30 
7,14,21 
9, 27, 81 
100 200 300 
5 10 
8,16,24,32 
-12 -18 -24 
11, 22, abc 
0 0 5`;

const SEPERATOR = /(\s+|,\s*)/;
const LINE = new RegExp(`^(-?\\d+)${SEPERATOR.source}(-?\\d+)${SEPERATOR.source}(-?\\d+)$`);

const GetGcd = (a, b) => {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
};
const total = input.split("\n").reduce((sum, line) => {
  const m = line.trim().match(LINE);
  if (!m) return sum;
  const [a, b, c] = [m[1], m[3], m[5]].map(Number);
  return sum + GetGcd(GetGcd(a, b), c);
}, 0);

console.log(total);