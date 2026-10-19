import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "../src/components/About/About.jsx"


import './index.css'
import Service from "./pages/Service/Service.jsx"
import Anyquestion from "./components/AnyQuestion/Anyquestion.jsx"
import Contacts from "./pages/Contacts/Contacts.jsx"
import Remont from "./pages/Remont/Remont.jsx"



function App() {

  
  

  return (
    <>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/remont" element={<Remont /> } />
          
        </Routes>
      </main>
       <Anyquestion />
      <Footer />
    </>
  )
}

export default App
