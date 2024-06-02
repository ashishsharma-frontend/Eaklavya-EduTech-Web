import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/MainPages/HomePage/HomePage";
import DiscoverPage from "./Components/MainPages/DiscoverPage/DiscoverPage";
import CourseSection from "./Components/MainPages/CourseSection/CourseSection";
import ProjectPage from "./Components/MainPages/ProjectSection/ProjectPage";
import CourseDetailPage from "./Components/MainPages/CoursePage/CourseDetailsPage";
import Footer from "./Components/Footer/Footer";
import NotFoundPage from "./Components/NotFound"; // Import NotFoundPage component
import ScrollToTop from "./Components/ScrollTop/ScrollToTop"; // Import ScrollToTop component
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/coursesection" element={<CourseSection />} />
        <Route path="/projectpage" element={<ProjectPage />} />
        <Route path="/course-details/:courseId" element={<CourseDetailPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Add the NotFoundPage component */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
