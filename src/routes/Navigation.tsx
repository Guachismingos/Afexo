import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContent from "../components/main-container/MainContent";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
