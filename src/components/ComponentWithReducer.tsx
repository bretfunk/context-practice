import React from "react"
import { useCountState, useCountDispatch} from "../contexts/ReducerProvider"

export const ComponentWithReducer:React.FC = () => {
  const {count} = useCountState()
  const countDispatch = useCountDispatch()
  return (
    <>
      <h1>Component With Reducer</h1>
      <h1>{count}</h1>
      <button onClick={() =>countDispatch({type: 'decrement'})}>-</button>
      <button onClick={() =>countDispatch({type: 'increment'})}>+</button>
    </>
    )
}
