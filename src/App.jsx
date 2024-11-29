import { Container } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ActionSection from "./components/ActionSection";

function App() {
  return (
    <>
      <Container fluid className="bg-dark text-light">
        <TopBar />
        <ActionSection />
        <Main />

        <Footer />
      </Container>
    </>
  );
}

export default App;
