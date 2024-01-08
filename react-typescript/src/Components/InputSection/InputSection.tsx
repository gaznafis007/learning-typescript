import React, { useState } from 'react'

const InputSection = () => {
    const [name,setName] = useState<null| string>("")
    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value)
    }
  return (
    <section>
    <div>
      <label htmlFor="name">Name:{name}</label>
    </div>
    <input type="text" name="name" id="name" placeholder='write your name' onChange={handleNameChange} />
  </section>
  )
}

export default InputSection