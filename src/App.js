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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/Users';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='appointment' element={
      <RequireAuth>
      <Appointment />
      </RequireAuth>
    } />
    <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
      <Route index element={<MyAppointment></MyAppointment>}></Route>
      <Route path='review' element={<MyReview></MyReview>}></Route>
      <Route path='history' element={<MyHistory></MyHistory>}></Route>
      <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
      <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
