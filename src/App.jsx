import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardProfile from "./pages/dashboardPages/DashboardProfile";
import MessagePage from "./pages/dashboardPages/MessagePage";
import UsersPage from "./pages/dashboardPages/UsersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardProfile />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="user" element={<UsersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
