let language:string[] =['sr', "false"]
 language.push("typescript")
//  language.push(true);
 language.push('close');
//  console.log(language);

// typescript objects and enums
// Enum's value cannot be change
let profile:{
    name?: string,
    age?: number,
    isMarried?: boolean,
    skills?: string[]
}

    profile = {
    name:"harkirat singh",
    age: 28,
    isMarried: false,
    skills: ['javascript', 'typescript', 'nodejs', 'express', 'cypress', 'jest']
}

let profileAge = profile.age! + 5
let toggleSituation = !profile.isMarried;
let profileName = profile.name?.slice(0,5)

const skillSet = profile.skills?.map((skill)=>skill.toUpperCase())
// console.log(profile, skillSet, profileAge, toggleSituation, profileName);

enum Profile{
    harkirat,
    fraz,
    nishant,
    ayush
}
// Profile.ayush = 4
// console.log(Profile['3']);
// console.log(Profile[3]);
// console.log(Profile['ayush']);
// console.log(Profile.ayush);

enum Configs {
    apiKey = "API_KEY",
    appId = "APP_ID",
}
// console.log(Configs['apiKey']);
// console.log(Configs.apiKey);

//FUNCTION
// if function doesn't return anything it default return type void

function add (num1: number,num2: number){
    return num1+num2;
}
function addTwo (num1: number,num2: number):number{
    return num1+num2;
}
const addThree = function(num1: number,num2: number):number{
    return num1+num2;
}
const addFour = (num1: number,num2: number):number=>{
    return num1+num2;
}
const addFive = (num1:number,num2:number,num3:number)=>{
    return [`${num1+num2+num3}`]
}
const addSix = (num1:number,num2:number,num3:number=0)=>{
    return num1+num2+num3
}

const addSeven = (...numbers:number[])=>{
    const func = (prev:number, curr:number)=>prev+curr;
    return numbers.reduce(func, 0)
}

let addEight :(num1:number, num2:number, num3?:number)=> string[]

 addEight= (num1, num2, num3 = 0) =>{
    return [`${num1+num2+num3}`]
 }

// const result = addEight(10,20);
// console.log(result);

// TYPE ALIAS
// type alias consist of types like where variable consists of value
// type could be function signature
 type Name = "harkirat singh";
 let nominee: Name = "harkirat singh"
 type Add = (numbersArray:number[])=>number
 let addTen:Add = (numbers)=>{
    return numbers.reduce((prev,curr)=>prev+curr, 0)
 }

 let result = addTen([10,10])
//  console.log(result);

type Structure = {
    name:Name;
    age: number;
    isMarried?: boolean;
    email: string,
    address?:{
        permanentAddress: string;
        presentAddress:string;
    }
    favorites:{
        type: "food" | "sport";
        value: string
    }[]

}
const harkiratsProfile:Structure = {
    name: "harkirat singh",
    age : 10,
    email: "",
    favorites:[
        {
            type: "sport",
            value: "football"
        }
    ]

}
interface Auth{
    isLoggedIn:boolean
}
interface Person extends Auth{
    name:Name,
    age: number,
    email: string,
    photoUrl: string,
}

const harkirat: Person = {
    name:"harkirat singh",
    age:2,
    email:"example",
    photoUrl:"",
    isLoggedIn:false
}