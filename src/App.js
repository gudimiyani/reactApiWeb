import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './componants/Home';
import About from './componants/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Singleproduct from './componants/Singleproduct';
import Header from './componants/Header';
import Contact from './componants/Contact';
import Error from './componants/Error';
import Category from './componants/Category';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="singleproduct/:id" element={ <Singleproduct/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="*" element={ <Error/> } />
        <Route path="category/:id" element={ <Category/> } />
      </Routes>
    </>
  );
}

export default App;
