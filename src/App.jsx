import './App.css';
import Login_page from './pages/Login_page';
import Signup_page from './pages/Signup_page';
import Main_page from './pages/Main_page';
import User_page from './pages/User_page';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login_page />}></Route>
      <Route path='/signup' element={<Signup_page />}></Route>
      <Route path='/main' element={<Main_page />}></Route>
      <Route path='/user' element={<User_page />}></Route>
    </Routes>
  )
}

export default App
