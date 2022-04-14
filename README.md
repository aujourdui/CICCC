# TypeScript Exercise 1 – Basic Types and Annotation

### ======== Exercise 1.0 ========
Instructions:
- Hover over red squigglies to inspect the TS errors.
- Hover over variables to inspect their types.
- Fix the error on line 18 by changing the value of pi to the expected type.

```bash
let pi = "3.14159";
let tau = pi * 2;

console.log("[Exercise 1.0]", `${tau} is ${pi} times two.`);
```

### ======== Exercise 1.1 ========
Instructions:
- Inspect type of `pie`
- Add an explicit type annotation to `pie`
- Try assigning invalid types, for fun

```bash
let pie;
pie = "blueberry";

console.log("[Exercise 1.1]", `I like to eat ${pie}-flavored pie.`);
```

### ======== Exercise 1.2 ========
Instructions:
- Inspect the error, then fix it.

```bash
let isMark: boolean;

console.log("[Exercise 1.2]", `${isMark ? "Oh, hi Mark" : "Who are you?"}`);
```

### ======== Exercise 1.3 ========
Instructions:
- Add type annotations (as explicit as possible)
- Fix errors (if applicable)

```bash
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;

const members: any[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber
];

members[0] = "12345";

console.log("[Exercise 1.3]", members);
```

### ======== Exercise 1.4 ========
Instructions:
- Add type annotations (as explicit as possible)
- Fix errors (if applicable)

```bash
const sequence = Array.from(Array(10).keys());
const animals = ["pangolin", "aardvark", "echidna", "binturong"];
const stringsAndNumbers = [1, "one", 2, "two", 3, "three"];
const allMyArrays = [sequence, animals, stringsAndNumbers];

console.log("Exercise 1.4", allMyArrays);
```
### ======== Exercise 1.5 ========
Goal:
- Add type annotations (as explicit as possible)
- Fix errors (if applicable)

We want to represent an inventoryItem as a structure where the first entry is the item name and the second is the quantity

```bash
(() => {

  const inventoryItem = ["fidget wibbit", 11];
  
  // later we destructure it
  const [name, qty] = inventoryItem;
  
  const msg = addInventory(name, qty);
  
  console.log("[Exercise 1.6]", msg);
  
  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }
})()
```
