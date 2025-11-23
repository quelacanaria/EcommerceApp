import Header from './Components/Header'
import Form from './Components/Form-copy'
import Products from './Components/Products-copy'
import React, {useState} from 'react'
function App() {
const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Form setCount={setCount}/>
      <Products count={count}/>
    </>
  )
}

export default App
