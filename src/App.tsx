import React from 'react'
import Home from './views/home'
import { useDispatch } from 'react-redux'
import { getData } from './redux/reducers/fetchSlice'

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
