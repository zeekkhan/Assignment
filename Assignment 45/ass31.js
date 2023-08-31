"use strict";
/* Assignment # 31 */
/* Checking Usernames */
const currentUsers = ["user1", "admin", "user2", "user3", "user4"];
const newUsers = ["newuser1", "user2", "newuser2", "user5", "newuser3"];
for (const newUser of newUsers) {
    if (currentUsers.includes(newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} username is available.`);
    }
}
