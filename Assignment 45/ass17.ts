/* Assignment # 17 */

/* Seeing the World */

const placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];

console.log("Original order:", placesToVisit.join(", "));

console.log("Alphabetical order:", placesToVisit.slice().sort().join(", "));

console.log("Original order is still intact:", placesToVisit.join(", "));

console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse().join(", "));

console.log("Original order is still intact:", placesToVisit.join(", "));

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit.join(", "));

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit.join(", "));

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit.join(", "));

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit.join(", "));

