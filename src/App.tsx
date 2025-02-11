import HomePage from "./pages/Home/HomePage"
import ProjectsPage from "./pages/Projects/ProjectsPage"
import AboutPage from "./pages/About/AboutPage"
import ContactPage from "./pages/Contact/ContactPage"
import { Navigate, Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
