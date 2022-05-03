import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContent from "../components/main-container/MainContent";

const Navigation = () => {
  return (
    <Container fluid className="animate__animated animate__fadeIn px-0">
      <BrowserRouter>
        <Header />
        <MainContent />
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default Navigation;
