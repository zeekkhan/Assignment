"use strict";
/* Assignment # 14 */
/* Changing Guest List */
const dinnerGuests2 = ["Abdullah", "Wali Hayat", "Shehzad", "Sana Ullah"];
const cannotAttend = dinnerGuests2.pop();
console.log(`${cannotAttend} cannot make it to dinner.`);
dinnerGuests2.push("Habib");
for (const guest of dinnerGuests2) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
