import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import ProfilePage from "./components/ProfilePage";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileAccountSecurity from "./components/ProfileAccountSecurity";
import ProfileCloseAccount from "./components/ProfileCloseAccount";

=======
import Footer from "./components/Footer";
>>>>>>> ddd8b3f9623d264ff1384d9bdf312aed61e279e3
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
      <Footer />
    </div>
  );
}

export default App;
