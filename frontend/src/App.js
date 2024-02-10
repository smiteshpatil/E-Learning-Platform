import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfilePage from "./components/ProfilePage";
import ProfileAccountSecurity from "./components/ProfileAccountSecurity";
import ProfileCloseAccount from "./components/ProfileCloseAccount";
import Course from "./components/pages/Course";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/profile/photo" element={<ProfilePhoto />}></Route>
        <Route
          path="/profile/security"
          element={<ProfileAccountSecurity />}
        ></Route>
        <Route
          path="/profile/closeAccount"
          element={<ProfileCloseAccount />}
        ></Route>
        <Route path="/courses">
          <Route path=":id" element={<Course />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
