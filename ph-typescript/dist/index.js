"use strict";
var _a, _b;
let language = ['sr', "false"];
language.push("typescript");
//  language.push(true);
language.push('close');
//  console.log(language);
// typescript objects and enums
// Enum's value cannot be change
let profile;
profile = {
    name: "harkirat singh",
    age: 28,
    isMarried: false,
    skills: ['javascript', 'typescript', 'nodejs', 'express', 'cypress', 'jest']
};
let profileAge = profile.age + 5;
let toggleSituation = !profile.isMarried;
let profileName = (_a = profile.name) === null || _a === void 0 ? void 0 : _a.slice(0, 5);
const skillSet = (_b = profile.skills) === null || _b === void 0 ? void 0 : _b.map((skill) => skill.toUpperCase());
// console.log(profile, skillSet, profileAge, toggleSituation, profileName);
var Profile;
(function (Profile) {
    Profile[Profile["harkirat"] = 0] = "harkirat";
    Profile[Profile["fraz"] = 1] = "fraz";
    Profile[Profile["nishant"] = 2] = "nishant";
    Profile[Profile["ayush"] = 3] = "ayush";
})(Profile || (Profile = {}));
// Profile.ayush = 4
// console.log(Profile['3']);
// console.log(Profile[3]);
// console.log(Profile['ayush']);
// console.log(Profile.ayush);
var Configs;
(function (Configs) {
    Configs["apiKey"] = "API_KEY";
    Configs["appId"] = "APP_ID";
})(Configs || (Configs = {}));
// console.log(Configs['apiKey']);
// console.log(Configs.apiKey);
//FUNCTION
// if function doesn't return anything it default return type void
function add(num1, num2) {
    return num1 + num2;
}
function addTwo(num1, num2) {
    return num1 + num2;
}
const addThree = function (num1, num2) {
    return num1 + num2;
};
const addFour = (num1, num2) => {
    return num1 + num2;
};
const addFive = (num1, num2, num3) => {
    return [`${num1 + num2 + num3}`];
};
const addSix = (num1, num2, num3 = 0) => {
    return num1 + num2 + num3;
};
const addSeven = (...numbers) => {
    const func = (prev, curr) => prev + curr;
    return numbers.reduce(func, 0);
};
let addEight;
addEight = (num1, num2, num3 = 0) => {
    return [`${num1 + num2 + num3}`];
};
let nominee = "harkirat singh";
let addTen = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0);
};
let result = addTen([10, 10]);
const harkiratsProfile = {
    name: "harkirat singh",
    age: 10,
    email: "",
    favorites: [
        {
            type: "sport",
            value: "football"
        }
    ]
};
const harkirat = {
    name: "harkirat singh",
    age: 2,
    email: "example",
    photoUrl: "",
    isLoggedIn: false
};
