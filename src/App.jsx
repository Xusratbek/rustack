import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
 

  return (
    <>
    <Header />
    <Routes>  
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer/>
     </>
  )
}

export default App
