import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";
import Menu from "./components/menu/Menu";
import SubRegiones from "./components/sub-regiones/SubRegiones";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/sub-regiones" element={<SubRegiones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
