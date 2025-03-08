import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MyPosts from './pages/myposts';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import useAuthStore from './stores/authStore';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/home" element={<HomePage />} />
            <Route path="/myposts" element={<MyPosts />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
