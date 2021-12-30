import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './Components/Homepage';
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Social from "./Components/Social";
import About from "./Components/About";
function App() {
  useEffect(() => {
    document.title = "Portfolio | Parth Radia";

    toast("Hey there! Happy to see you here 😊", {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer limit={1} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route path="/contacts" element={<Social />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
