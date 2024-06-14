import './App.css';
import Login_page from './pages/Login_page';
import Signup_page from './pages/Signup_page';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login_page />}></Route>
      <Route path='/signup' element={<Signup_page />}></Route>
    </Routes>
  )
}

export default App
