import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<h1>From Dashboard index page</h1>} />
          <Route path="message" element={<h1>From Messages</h1>} />
          <Route path="user" element={<h1>From Users</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
