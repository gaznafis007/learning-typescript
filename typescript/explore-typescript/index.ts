type Message = string
const message:Message= "Hello Typescript";
let messageTwo=message.toLowerCase()
// console.log(messageTwo)
let users :{name:string,userId:number}[]
users=[]
let userOne:{name: string, userId:number};
 userOne = {
    name: "exampleName",
    userId: 1274,
}
users.push(userOne)
let userTwo : {name:string, userId: number};
userTwo={
    name:"exampleNameTwo",
    userId: 1234,
}
users.push(userTwo);
 for (const key in users) {
    console.log(users[key].name);
 }
console.log(userOne.name);
