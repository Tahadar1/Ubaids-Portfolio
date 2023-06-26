import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.png";
import TrackVisibility from "react-on-screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../css/contact.css"

export const Contact = () => {
  const phoneNumber = "+923325010702";

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappURL;
  };
  const email = "urk.khan@outlook.com";

  const handleEmailClick = () => {
    const gmailURL = `mailto:${email}`;
    window.open(gmailURL);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <p>
                    If you are looking for animation and video editing services,
                    feel free to reach out to me.
                    As a professional in the field, I have extensive
                    experience in creating captivating visuals that bring ideas
                    to life.
                    Contact me today to discuss your project
                    requirements and get a quote.
                    You can reach me through means given below.</p>
                  <p>I am looking forward to collaborating with you!</p>

                  <div className="icon">
                  <h4>
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />{" "}
                    <a className="icon-edit"
                      href={`https://wa.me/${phoneNumber}`}
                      onClick={handleWhatsAppClick}
                    >
                      {phoneNumber}
                    </a>
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    <a className="icon-edit" href={`mailto:${email}`} onClick={handleEmailClick}>
                      {email}
                    </a>
                  </h4>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
