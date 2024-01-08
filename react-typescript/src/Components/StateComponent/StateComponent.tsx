import React, { useState } from 'react'

interface IStateComponentProps{
    style: React.CSSProperties
  }
const StateComponent = ({style}:IStateComponentProps) => {
    const [toggle,setToggle] = useState(false)
    const handleChangeStyle = () =>{
        setToggle(true)
    }
    const handleDefault = () =>{
        setToggle(false)
    }
  return (
    <div>
        <h2>Hello Typescript React</h2>
         <p style={toggle ? style : {}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dignissimos eveniet nisi distinctio atque facere, eius a corrupti magnam! Doloribus placeat suscipit error quia, reiciendis a dicta natus. Inventore eveniet aut dolorum earum dolor similique magnam. Quis nisi voluptatibus expedita odit voluptatem perferendis debitis consequatur quisquam reiciendis quaerat amet eveniet aut, temporibus repudiandae laborum. Eos, amet natus. Corporis hic nam obcaecati neque id voluptatibus est sint itaque voluptate ipsum, consequatur natus ratione modi saepe voluptas harum commodi. Maiores deserunt incidunt sit neque magni recusandae repudiandae sint inventore dolor sed enim, aliquid tempora aspernatur vel eos, porro unde, perferendis quasi eveniet!
        </p>
        <button onClick={handleChangeStyle}>Change Style</button>
        <button onClick={handleDefault}>Default</button>
    </div>
  )
}

export default StateComponent