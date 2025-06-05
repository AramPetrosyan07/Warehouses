import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
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
  </Routes>
);

export default AppRoutes;
