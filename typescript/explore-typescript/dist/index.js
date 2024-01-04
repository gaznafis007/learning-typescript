"use strict";
const message = "Hello Typescript";
let messageTwo = message.toLowerCase();
// console.log(messageTwo)
let users;
users = [];
let userOne;
userOne = {
    name: "exampleName",
    userId: 1274,
};
users.push(userOne);
let userTwo;
userTwo = {
    name: "exampleNameTwo",
    userId: 1234,
};
users.push(userTwo);
for (const key in users) {
    console.log(users[key].name);
}
console.log(userOne.name);
