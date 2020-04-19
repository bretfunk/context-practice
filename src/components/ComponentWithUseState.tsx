import React, {useContext} from "react"
import {UseState} from "../contexts/UseStateProvider"

export const ComponentWithUseState:React.FC = () => {
  const {count, addCount, subtractCount} = useContext(UseState)
  return (
    <>
      <h1>Component With Use State</h1>
      <h1>{count}</h1>
      <button onClick={subtractCount}>-</button>
      <button onClick={addCount}>+</button>
    </>
    )
}
