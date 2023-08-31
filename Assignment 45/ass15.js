"use strict";
/* Assignment # 15 */
/* More Guests */
const dinnerGuests3 = ["Abdullah", "Wali Hayat", "Shehzad", "Sana Ullah"];
console.log("Good news! We found a bigger dinner table.");
dinnerGuests3.unshift("Habib");
dinnerGuests3.splice(2, 0, "Arsalan");
dinnerGuests3.push("Abdur Rahman");
for (const guest of dinnerGuests3) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
