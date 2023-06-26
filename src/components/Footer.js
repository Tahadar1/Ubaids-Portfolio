import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/me.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/[CITYPNG.COM]HD White Youtube YT Logo Symbol Icon PNG - 1174x827.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ubaid-ur-rehman-khan-245527186/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Urk-Khan"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/urkkhan/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.youtube.com/playlist?list=PLKmvfY4sYQgmeHbFmR2SgpY81L7cqQCts"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
