import { useState, createContext } from 'react'
import Name from './components/Name'
import './App.css'


export const UseContext = createContext()
function App() {
  const [count, setCount] = useState('')
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleClick() {
    setCount(name)
  }
  return (
    <>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>

      <UseContext.Provider value={count}>
        <Name/>
      </UseContext.Provider>
    </>
  )
}

export default App
