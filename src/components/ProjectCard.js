import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{'height':'15rem'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a href={projectUrl} style={{'textDecoration':'none'}}>Source</a>
        </div>
      </div>
    </Col>
  )
}
