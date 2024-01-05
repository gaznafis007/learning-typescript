export type UserInformation = {
    userName: string,
    userId: number,
    status?: boolean
}
export class UserInit {
    name: string;
    age: number;
    status: boolean;
    constructor(name:string, age:number, status:boolean){
        this.name = name;
        this.age = age;
        this.status = status
    }
    display(){
        console.log(`I am ${this.name} and ${this.age} years old and I am ${this.status} now`)
    }

}