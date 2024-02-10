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
<<<<<<< HEAD
import UserProfile from "./components/UserProfile";

=======
import Course from "./components/pages/Course";
import Footer from "./components/Footer";
>>>>>>> 8acdbdea91b9b2ee42256e155ba4ce47901cf40c

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
<<<<<<< HEAD
        <Route path="/user" element={<ProfilePage />}>
          <Route path="photo" element={<ProfilePhoto />} />
          <Route path="security" element={<ProfileAccountSecurity />} />
          <Route path="closeAccount" element={<ProfileCloseAccount />} />
          <Route path="profile" element={<UserProfile />} />
=======
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
>>>>>>> 8acdbdea91b9b2ee42256e155ba4ce47901cf40c
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
