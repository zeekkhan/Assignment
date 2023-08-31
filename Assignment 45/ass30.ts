/* Assignment # 30 */

/* No User */

const usernames1: string[] = [];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const username of usernames1) {
        console.log(`Hello ${username}, thank you for logging in.`);
    }
}
