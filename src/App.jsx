import { Routes, Route } from "react-router-dom";
import NavbarTools from "./Components/NavbarTools";
import Footer from "./Components/Footer";
import "./Styles/App.css";

// Home Page Components
import Header from "./Components/Header";
import Descriptionblock from "./Components/Descriptionblock";
import DevProducts from "./Components/DevProducts";
import CustomSec from "./Components/CustomSec";
import BlogsSec from "./Components/BlogsSec";

// Pages
import About from "./Components/About";
import Blog from "./Components/Blog";
import Service from "./Components/Service";

function App() {
  // Home Page Component
  const HomePage = () => (
    <>
      <Header />
      <Descriptionblock />
      <DevProducts />
      <CustomSec />
      <BlogsSec />
    </>
  );

  return (
    <>
      <NavbarTools />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;