
/* Assignment # 16 */

/* Shrinking Guest List */

export const dinnerGuests4: string[] = ["Abdullah", "Wali Hayat", "Shehzad","Sana Ullah"];

console.log("We can only invite two guests for dinner.");

while (dinnerGuests4.length > 2) {
    const removedGuest = dinnerGuests4.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (const guest of dinnerGuests4) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

dinnerGuests4.length = 0; // Empty the array
console.log("The guest list is empty:", dinnerGuests4);

