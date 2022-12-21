import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Container } from 'react-bootstrap';
import AnimatedCity from './components/AnimatedCity';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Container style={{'paddingTop':'3rem'}}>
        <h2>Get in Contact</h2>
        <p>I Believe we can achieve great thhings togeether. Please send me a message in LinkedIn and add me on GitHub!</p>
        <p>Im a </p>
        <AnimatedCity/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
