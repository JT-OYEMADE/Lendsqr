import './style/index.scss'
import Login from './components/Login';
import { Dashboard } from './components/dashboard';
import UserDetailsLayout from './components/userDetailsLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layouts/DashboardLayout';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path='/user' element={<DashboardLayout><UserDetailsLayout /></DashboardLayout>} />
        <Route path='*' element={<h2>NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
