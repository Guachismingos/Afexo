import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContent from "../components/main-container/MainContent";

const Navigation = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <BrowserRouter>
        <Header />
        <MainContent />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
