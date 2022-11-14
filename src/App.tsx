import React from 'react'
import Home from './components/home'
import { useDispatch } from 'react-redux'
import { getData } from './redux/reducers/fetchSlice'

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux Assignment</h1>
      <Home />
      <button
        onClick={() =>
          dispatch(
            getData({
              method: 'get',
              url: 'data.json',
              data: {
                name: 'Ananya',
                phone: '9480865631',

                address: 'Haleyangadi',
              },
            }),
          )
        }
      >
        getData
      </button>
    </div>
  )
}

export default App
