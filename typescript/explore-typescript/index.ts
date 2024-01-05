import {UserInformation, UserInit} from "./common"

type Message = string
const message:Message= "Hello Typescript";
let messageTwo=message.toLowerCase()
// console.log(messageTwo)
type User = {name:string, userId: number}
let users :User[]
users=[]
let userOne:User;
 userOne = {
    name: "exampleName",
    userId: 1274,
}
users.push(userOne)
let userTwo : User;
userTwo={
    name:"exampleNameTwo",
    userId: 1234,
}
users.push(userTwo);
 for (const key in users) {
    // console.log(users[key].name);
 }
type RequestType = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

// function requestHandler(requestType:RequestType){
//     console.log(requestType);
//     return requestType
// }
const requestHandler =(requestType:RequestType):[string] =>{
    // console.log(requestType);
    return [requestType]
}
// console.log(requestHandler("GET"));

let userInfo:UserInformation = {
    userName: "Uzui Kokoshibo",
    userId: 126789,
    status: true
}

let userProfile = new UserInit("Uchiha", 1245, true)
userProfile.display()

class UserInfo {
    userName: string;
    age: number;
    isOccupied: boolean;
    constructor(userName:string, age:number, isOccupied:boolean){
        this.userName = userName;
        this.age= age;
        this.isOccupied=isOccupied;
    }
    displayData(){
        console.log({userName:this.userName, age:this.age, isOccupied:this.isOccupied});
    }
}

const userExample = new UserInfo("exampleName",25,false)
userExample.displayData()

abstract class HypotheticalAbstractClass{
    private senderId: number;
    public isSenderActive: boolean;
    private receiverId: number;
    public isReceiverActive: boolean;
    readonly sendTime: string;
    protected sendItems?: object[];

    constructor(senderId:number, isSenderActive:boolean, receiverId:number, isReceiverActive:boolean, sendTime:string, sendItems:object[]){
        this.senderId = senderId;
        this.isSenderActive = isSenderActive;
        this.receiverId = receiverId;
        this.isReceiverActive = isReceiverActive;
        this.sendTime = sendTime;
        this.sendItems = sendItems;
    }
    abstract disp():void
    setProtectedItem(protectedItem:object[]){
        this.sendItems=protectedItem;
        console.log(this.sendItems)
    }
    getProtectedItem(){
        return this.sendItems
    }
}
class SendMessage extends HypotheticalAbstractClass{
    
    disp(): void {
        console.log(`this is nice`)
    }
}
// modifier PUBLIC,PRIVATE,PROTECTED,READ ONLY
// Protected can't inherit
// Private limited in the class only ca not be extend but can be access through public method also can be get by public method of the class
// Readonly cannot be modified