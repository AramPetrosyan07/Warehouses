import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default AppRoutes;
