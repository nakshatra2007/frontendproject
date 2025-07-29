import { useState } from 'react'
import './App.css'
import{Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to frontend class </h1>
      <h2>introduction to react</h2>
      <h3>today date is 29-07-25</h3>
      <h4>Nakshatra</h4>
      <h3>2400033120</h3>
      <Link to="/page1">Go To Page1</Link>
      <br /><br />
       <Link to="/page2">Go To Page2</Link>
      <br /><br />
       <Link to="/page3">Go To Page3</Link>
    </>
  )
}

export default App