import React from 'react';
import './App.css';
import {UseStateProvider} from "./contexts/UseStateProvider"
import {ComponentWithUseState} from "./components/ComponentWithUseState"
import {ComponentWithReducer} from "./components/ComponentWithReducer"
import {ReducerProvider} from "./contexts/ReducerProvider"

const App:React.FC = () => {
  return (
    <div className="App">
      <UseStateProvider>
        <ReducerProvider>
        <ComponentWithUseState />
        <ComponentWithReducer />
      </ReducerProvider>
    </UseStateProvider>
    </div>
  );
}

export default App;
