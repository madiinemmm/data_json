import React from 'react'
import { useEffect } from 'react'
import {axiosClient} from './utils/axiosClient'

function App() {
  useEffect(() => {
    axiosClient('/products')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  }, [])
  return (
    <div>App</div>
  )
}

export default App