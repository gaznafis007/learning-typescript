import React from 'react'

interface Iprops{
    children: React.ReactNode
}

const Button = ({children}:Iprops) => {
  return (
    <>{children}</>
  )
}

export default Button