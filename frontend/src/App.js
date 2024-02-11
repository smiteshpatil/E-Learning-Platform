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
import Course from "./components/pages/CoursePage";
import Dashboard from "./components/instructor/Dashboard";

import VideoPage from "./components/pages/VideoPage";
import VideoOverview from "./components/pages/VideoOverview";
import VideoQAndA from "./components/pages/VideoQAndA";
import VideoNotes from "./components/pages/VideoNotes";
import VideoReview from "./components/pages/VideoReview";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />}></Route>
        {/* Loginpage route */}
        <Route path="/login" element={<LoginPage />}></Route>

        {/* User Routes */}
        <Route path="/user" element={<ProfilePage />}>
          <Route path="photo" element={<ProfilePhoto />} />
          <Route path="security" element={<ProfileAccountSecurity />} />
          <Route path="closeAccount" element={<ProfileCloseAccount />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Courses */}
        <Route path="/courses">
          <Route path=":id" element={<Course />}></Route>
        </Route>

        {/* Instructor */}
        <Route path="/user/instructor" element={<Dashboard />}></Route>

        {/* Video Routes demo */}
        <Route path="/video" element={<VideoPage />}>
          <Route path="overview" component={VideoOverview} />
          <Route path="qanda" component={VideoQAndA} />
          <Route path="notes" component={VideoNotes} />
          <Route path="review" component={VideoReview} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
