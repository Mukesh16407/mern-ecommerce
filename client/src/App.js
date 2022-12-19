import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Nav/Header";
import { Login } from "./pages/Auth/Login";
import { Register } from './pages/Auth/Register';
import { Home } from "./pages/Home";

import "./stylesheets/theme.css";
import "./stylesheets/alignments.css";
import "./stylesheets/textElement.css";
import "./stylesheets/customComponents.css";
import "./stylesheets/formElements.css";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={ <Register/>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
