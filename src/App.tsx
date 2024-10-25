import './App.css'
import HomePage from './components/Home'
import { Game } from './components/game'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
