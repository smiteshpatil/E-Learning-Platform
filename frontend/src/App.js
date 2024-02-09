import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileAccountSecurity from "./components/ProfileAccountSecurity";
import ProfileCloseAccount from "./components/ProfileCloseAccount";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/profile" element ={<ProfilePage/>}></Route>
        <Route path="/profile/photo" element ={<ProfilePhoto/>}></Route>
        <Route path="/profile/security" element ={<ProfileAccountSecurity/>}></Route>
        <Route path="/profile/closeAccount" element ={<ProfileCloseAccount/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
