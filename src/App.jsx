import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import Order from './components/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Order />
    </>
  )
}

export default App
