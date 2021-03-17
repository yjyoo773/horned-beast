import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container fluid className="align-middle" >
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
