import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Saved } from "./pages";
import { Navbar, Footer } from "./components/index";
import './App.css'
import VideoId from "./pages/videoRepoId/videoId";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/savedVideo" element={<Saved />} />
        <Route path="/videoId" element={<VideoId />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
