import React, {useState, createContext} from "react"

type GlobalProps = {
  count?: number;
  addCount?: () => void;
  subtractCount?: () => void;
  user?: {
    name: string;
    age: number;
    cool: boolean;
  }
}

export const UseState = createContext<GlobalProps>({})


// have to have state vars or errors out
// because of deconstruction to pull out the vars
export const UseStateProvider:React.FC = ({children}) => {
  const [state, setState] = useState({count: 0, user: {name: '', age: 0, cool: true}})
  const addCount = () => {
    setState({...state, count: state.count + 1})
  }
  const subtractCount = () => {
    setState({...state, count: state.count - 1})
  }
  const value = {
    count: state.count,
    user: state.user,
    addCount,
    subtractCount
  }

  return (
    <UseState.Provider value={value}>
      {children}
    </UseState.Provider>
    )

}
