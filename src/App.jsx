import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"
import './App.css'

function Aplicacion() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="/blog/:slug" element={ <PostPage/> } />
      </Routes>
    </div>
  )
}

export default Aplicacion