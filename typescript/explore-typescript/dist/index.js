"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const message = "Hello Typescript";
let messageTwo = message.toLowerCase();
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
    // console.log(users[key].name);
}
// function requestHandler(requestType:RequestType){
//     console.log(requestType);
//     return requestType
// }
const requestHandler = (requestType) => {
    // console.log(requestType);
    return [requestType];
};
// console.log(requestHandler("GET"));
let userInfo = {
    userName: "Uzui Kokoshibo",
    userId: 126789,
    status: true
};
let userProfile = new common_1.UserInit("Uchiha", 1245, true);
userProfile.display();
class UserInfo {
    constructor(userName, age, isOccupied) {
        this.userName = userName;
        this.age = age;
        this.isOccupied = isOccupied;
    }
    displayData() {
        console.log({ userName: this.userName, age: this.age, isOccupied: this.isOccupied });
    }
}
const userExample = new UserInfo("exampleName", 25, false);
userExample.displayData();
class HypotheticalAbstractClass {
    constructor(senderId, isSenderActive, receiverId, isReceiverActive, sendTime, sendItems) {
        this.senderId = senderId;
        this.isSenderActive = isSenderActive;
        this.receiverId = receiverId;
        this.isReceiverActive = isReceiverActive;
        this.sendTime = sendTime;
        this.sendItems = sendItems;
    }
    setProtectedItem(protectedItem) {
        this.sendItems = protectedItem;
        console.log(this.sendItems);
    }
    getProtectedItem() {
        return this.sendItems;
    }
}
class SendMessage extends HypotheticalAbstractClass {
    disp() {
        console.log(`this is nice`);
    }
}
// modifier PUBLIC,PRIVATE,PROTECTED,READ ONLY
// Protected can't inherit
// Private limited in the class only ca not be extend but can be access through public method also can be get by public method of the class
// Readonly cannot be modified
