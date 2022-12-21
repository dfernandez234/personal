import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

import cplusplus from "../assets/img/languages/cplusplus.svg"
import csharp from "../assets/img/languages/csharp.svg"
import javascript from "../assets/img/languages/javascript.svg"
import linux from "../assets/img/languages/linux.svg"
import matlab from "../assets/img/languages/matlab.svg"
import microsoftsqlserver from "../assets/img/languages/mysql.svg"
import python from "../assets/img/languages/python.svg"
import react from "../assets/img/languages/react.svg"
import redux from "../assets/img/languages/redux.svg"
import typescript from "../assets/img/languages/typescript.svg"
import visualstudio from "../assets/img/languages/visualstudio.svg"
import NET from "../assets/img/languages/NET.png"
import graphql from "../assets/img/languages/graphql-plain.svg"
import git from "../assets/img/languages/git-original.svg"
import redis from "../assets/img/languages/redis-original.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm a software engineer originally focused on C++ Development.<br></br> But I enjoy learning new skills and technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={cplusplus} alt="c++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="csharp" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="linux" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={matlab} alt="matlab" />
                                <h5>Matlab</h5>
                            </div>
                            <div className="item">
                                <img src={microsoftsqlserver} alt="microsoftsqlserver" />
                                <h5>SQL/SQL Server</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="redux" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="typescript" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={visualstudio} alt="visualstudio" />
                                <h5>Visual Studio</h5>
                            </div>
                            <div className="item">
                                <img src={NET} alt="NET" />
                                <h5>.NET/ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src={graphql} alt="graphql" />
                                <h5>GraphQL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="git" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={redis} alt="redis" />
                                <h5>Redis</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
