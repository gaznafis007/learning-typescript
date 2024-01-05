"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInit = void 0;
class UserInit {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    display() {
        console.log(`I am ${this.name} and ${this.age} years old and I am ${this.status} now`);
    }
}
exports.UserInit = UserInit;
