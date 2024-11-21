import './App.css'
import Game from './components/game'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
