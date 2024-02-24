import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Login from './components/page/Login/Login';
import Main from './components/page/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Register from './components/page/Register/Register';
import Admin from './components/page/admin/Admin';
import Recipes from './components/page/Recipes/Recipes';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path="prisijungimas" element={<Login />} />
        <Route path="registracija" element={<Register />} />
        <Route path="admin" element={<Admin />} />
        <Route path="receptai" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
