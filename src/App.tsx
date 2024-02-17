import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Login from './components/page/Login/Login';
import Main from './components/page/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Register from './components/page/Register/Register';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path="prisijungimas" element={<Login />} />
        <Route path="registracija" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
