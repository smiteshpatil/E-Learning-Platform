import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import ProfileAccountSecurity from "./components/ProfileAccountSecurity";
import ProfileCloseAccount from "./components/ProfileCloseAccount";
import ProfilePage from "./components/ProfilePage";
import ProfilePhoto from "./components/ProfilePhoto";
import UserProfile from "./components/UserProfile";
import Course from "./components/pages/CoursePage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import VideoNotes from "./components/pages/VideoNotes";
import VideoOverview from "./components/pages/VideoOverview";
import VideoPage from "./components/pages/VideoPage";
import VideoQAndA from "./components/pages/VideoQAndA";
import VideoReview from "./components/pages/VideoReview";
import Cart from "./components/pages/Cart";
import Products from "./components/pages/Products";
import Dashboard from "./components/instructor/Dashboard";
import Courses from "./components/instructor/Courses";
import Home from "./components/instructor/Home";
import Revenue from "./components/instructor/Revenue";

import AdminDashboard from "./components/admin/AdminDashboard";
import AdminHome from "./components/admin/AdminHome";
import StudentController from "./components/admin/StudentController";
import CourseController from "./components/admin/CourseController";
import InstructorController from "./components/admin/InstructorController";

import UploadContentPage from "./components/instructor/UploadContentPage";
import CreateContent from "./components/instructor/CreateContent";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
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
        {/* Cart */}
        <Route path="/cart" element={<Cart />}></Route>
        {/* Cart */}
        <Route path="/product" element={<Products />}></Route>
        {/* Instructor */}
        <Route path="/user/instructor" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="revenue" element={<Revenue />} />
        </Route>
        {/* Admin */}
        <Route path="/user/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="courseController" element={<CourseController />} />
          <Route path="studentController" element={<StudentController />} />
          <Route
            path="instructorController"
            element={<InstructorController />}
          />
        </Route>
        {/* upload course content routes */}
        <Route path="/upload" element={<UploadContentPage />}>
          <Route path=":id" element={<CreateContent />} />
        </Route>
        {/* Video Routes demo */}
        <Route path="/video" element={<VideoPage />}>
          <Route path="overview" element={<VideoOverview />} />
          <Route path="qanda" element={<VideoQAndA />} />
          <Route path="notes" element={<VideoNotes />} />
          <Route path="review" element={<VideoReview />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
