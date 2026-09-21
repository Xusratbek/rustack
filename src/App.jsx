import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
 

  return (
    <>
    <Header />
    <main className="container">
       <Routes>  
      
      <Route path="/" element={<Home />} />
      
    </Routes>
    </main>
    <Footer/>
     </>
  )
}

export default App
