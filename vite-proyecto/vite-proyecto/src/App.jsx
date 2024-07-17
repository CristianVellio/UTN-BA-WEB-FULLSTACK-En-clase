import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
