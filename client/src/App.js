import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Nav/Header";
import { Login } from "./pages/Auth/Login";
import { Register } from './pages/Auth/Register';
import { Home } from "./pages/Home";
import { Footer } from "./Components/footer/Footer";
import { Reset } from "./pages/Auth/Reset";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/reset" element={<Reset/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
