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
        <p>I Believe we can achieve great things together. Please send me a message in LinkedIn and add me on GitHub!</p>
        <p>I'm passionate about technology and always looking forward to improve the life of everyone around me, even if it is just one bit.</p>
        <br/>
        <h2>About me</h2>
        <p>Kind of weird how I ended up in Software. I'm originally a Telecommunications Engineer who still has no idea how a radio works, I went into that major hoping I could work configuring routers all day since I didn't like to code. Been coding since I'm 13 went from Pascal to TurboC to C, maybe that's why I went into Telecommunications. But one day I realized what I love to do is creating things, and what better way than this.</p>
        <AnimatedCity/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
