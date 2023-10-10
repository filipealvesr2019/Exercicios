import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<h1>The flex-wrap Property</h1>

<div id="main">
  <div style={{backgroundColor:"coral"}}>A</div>
  <div style={{backgroundColor:"lightblue"}}>B</div>
  <div style={{backgroundColor:"khaki"}}>C</div>
  <div style={{backgroundColor:"pink"}}>D</div>
  <div style={{backgroundColor:"lightgrey"}}>E</div>
  <div style={{backgroundColor:"lightgreen"}}>F</div>
</div>

<div className="grid">
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
</div>


<div className="clamp">
  <div className="clamp"></div>
  <div className="clamp_box">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nihil in sunt perspiciatis dolore aut, soluta unde eos rerum eligendi et officia laborum rem quos, cumque atque sapiente, impedit est.</div>
  
</div>
    </>
  )
}

export default App
