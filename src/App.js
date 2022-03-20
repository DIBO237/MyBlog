import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/Home"
import Details from "./screens/Details"
import Navbars from './components/Navbars';


function App() {
  return (
    <>

    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
