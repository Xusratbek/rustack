import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "./pages/About/About.jsx"

import './index.css'

function App() {


  return (
    <>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
