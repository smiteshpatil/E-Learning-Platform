import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileAccountSecurity from "./components/ProfileAccountSecurity";
import ProfileCloseAccount from "./components/ProfileCloseAccount";
import UserProfile from "./components/UserProfile";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/user" element={<ProfilePage />}>
          <Route path="photo" element={<ProfilePhoto />} />
          <Route path="security" element={<ProfileAccountSecurity />} />
          <Route path="closeAccount" element={<ProfileCloseAccount />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
