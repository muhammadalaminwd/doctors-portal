import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='login' element={<Login />}></Route>
    <Route path='signup' element={<SignUp />}></Route>
    <Route path='appointment' element={
      <RequireAuth>
      <Appointment />
      </RequireAuth>}>
      </Route>
    </Routes>
    <ToastContainer />

    </div>
  );
}

export default App;
