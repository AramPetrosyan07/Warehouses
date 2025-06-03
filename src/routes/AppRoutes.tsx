import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import { DashboardLayout } from "../components/templates/DashboardLayout";
// import { DashboardPage } from "../components/pages/DashboardPage/DashboardPage";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DashboardLayout>
          <HomePage />
        </DashboardLayout>
      }
    />
    {/* <Route path="/" element={<DashboardPage />} /> */}
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default AppRoutes;
