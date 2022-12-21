import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Linux Memory Manager",
      description: "Implements the C Malloc Function from scratch, as an educational resource for CS Students",
      imgUrl: 'https://cdn.hswstatic.com/gif/c-program.jpg',
      projectUrl: "https://github.com/dfernandez234/linux_memoryManager_C"
    },
    {
      title: "Medical Data Analysis App",
      description: "Develooped as an independent contractor for a research institution, looking to implement data analysis for clinical data.",
      imgUrl: "https://www.edureka.co/blog/wp-content/uploads/2018/12/Data-Analytics-What-is-Data-Analytics-Edureka-1.png",
      projectUrl: "https://github.com/dfernandez234/cancer_data_analysis"
    },
    {
      title: "Activity Social Media App",
      description: "Social media App for enterprises, connecting employees through fun activities.",
      imgUrl: 'https://wbweb.com.br/images/blog/o-que-um-social-media-faz.png',
      projectUrl: 'https://github.com/dfernandez234/Reactivities'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          <Row>
                <h2>Projects</h2>
                <p>This are some important personal and professional public projects I've been involved with!.</p>
                </Row>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                        )
                      })
                  }
                </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
