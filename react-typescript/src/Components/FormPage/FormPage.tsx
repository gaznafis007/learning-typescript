import React, { useState } from 'react'


type User = {
    userName: string,
    userEmail: string,
    userPassword:string,
    userAge: string
}
const FormPage = () => {
    const [userInfo, setUserInfo] = useState<null | User>(null)
    const handleUser = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        let formData = new FormData(event.currentTarget);
        let userName = formData.get('name') as string;
        let userEmail = formData.get('email') as string;
        let userPassword = formData.get('password') as string;
        let userAge = formData.get('age') as string;
        let user:User ={
            userName,
            userEmail,
            userPassword,
            userAge
        }
        setUserInfo(user)
        
    }
  return (
    <div>
        {
            userInfo && <h1>Hello {userInfo?.userName}</h1>
        }
        <form onSubmit={handleUser}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={userInfo?.userName} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={userInfo?.userEmail}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={userInfo?.userPassword} />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="text" name="age" id="age" value={userInfo?.userAge} />
            </div>
            <div>
                <input type="submit" value="Add User" />
            </div>
        </form>
    </div>
  )
}

export default FormPage