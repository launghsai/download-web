import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const downloadpress=()=>{
    alert("HELO")
  }

  return (
    <>
     <div>
      <h3>HELLO World</h3>
      <button onClick={downloadpress} style={styles.button}>Download</button>
     </div>
    </>
  )
}

export default App

const styles= {
  button:{
    width:300,
    height:30,
    
  }
}
