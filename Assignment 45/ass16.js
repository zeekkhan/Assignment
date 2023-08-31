"use strict";
/* Assignment # 16 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dinnerGuests4 = void 0;
/* Shrinking Guest List */
exports.dinnerGuests4 = ["Abdullah", "Wali Hayat", "Shehzad", "Sana Ullah"];
console.log("We can only invite two guests for dinner.");
while (exports.dinnerGuests4.length > 2) {
    const removedGuest = exports.dinnerGuests4.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (const guest of exports.dinnerGuests4) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
exports.dinnerGuests4.length = 0; // Empty the array
console.log("The guest list is empty:", exports.dinnerGuests4);
