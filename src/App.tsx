import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import ProtectedRoutes from './ProtectedRoutes';
import UnProtectedRoutes from './UnProtectedRoutes';
import LoginPage from "./pages/LoginPage"
import UserRegistrationPage from "./pages/UserRegistrationPage"
import MainPage from "./pages/MainPage"
import HomePage from './pages/HomePage';
import OpenAIPage from './pages/OpenAIPage';
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnProtectedRoutes />} >
          <Route path="register" element={<UserRegistrationPage />} />
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
          <Route element={<MainPage />}>
            <Route path="/openai" element={<OpenAIPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/*" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
