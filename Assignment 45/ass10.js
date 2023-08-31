"use strict";
/* Assignment # 10 */
/*
/* Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. */
const names = ["Ali ", "Babar", "Khan", "Daud"];
for (const name of names) {
    console.log(name);
}
/* Assignment # 11 */
/* Greetings: Start with the array you used in Exercise 10, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */
for (const name of names) {
    console.log(`Hello, ${name}!`);
}
