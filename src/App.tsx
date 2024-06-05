import { useState } from 'react'

import './App.css'
import { Resent_Posts } from './components/Posts/Resent_Posts'
function App() {
  const [count, setCount] = useState(0)

  return (
  
<Resent_Posts/>

  )
}

export default App
