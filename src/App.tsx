import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Login from './components/page/Login/Login';
import Main from './components/page/Main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Main />} />
        <Route path="prisijungti" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
