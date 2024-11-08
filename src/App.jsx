import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Singer from './Singer'
import Counter from './Count'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
  const singers = [
    {name:"tayeb", age:40, Passion:"business"},
    {name:"sakib", age:65, Passion:"gaming"},
    {name:"Rofiq", age:90, Passion:"fotball"}
  ]


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Users></Users>
      
      <Counter></Counter>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Device name="Mobile" price="1500"></Device>
      <Boys name="Atif Aslam" age="19"></Boys>
      <Boys></Boys>
      <Boys></Boys>
      <Todo task="learn React"></Todo>
      <Todo task="nothing to do task"></Todo>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
    </>
  )
}

function Device(props) {
  return (
    <>
      <h2>This is my device: {props.name}</h2>
      <h2>This is my device: {props.price}</h2>
    </>
  )
}
// onno babe function e asa object(props) k access korte caile--->
function Boys({ name = "N/A", age = 0 }) {
  return (
    <>
      <h2>Boy Name: {name}</h2>
      <h2>Boy Age: {age}</h2>
    </>
  )
}

export default App
