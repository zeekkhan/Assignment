"use strict";
/* Assignment # 13 */
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
const dinnerGuests = ["Abdullah", "Wali Hayat", "Shehzad", "Sana Ullah"];
for (const guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
