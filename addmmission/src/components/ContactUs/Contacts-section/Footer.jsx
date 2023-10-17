import React from 'react'
import { Container, Row, Col } from "reactstrap";
import './footer.css'






const Footer = () => (
  <div className="footer">
    <section>
<footer className="footer">
<Container>
  <Row>
    <Col lg="3" md="6" className="mb-4">
      <h2 className=" d-flex align-items-center gap-1">
        <i class="ri-pantone-line"></i> Learners.
      </h2>

      <div className="follows">
        <p className="mb-0">Follow us on social media</p>
        <span>
          {" "}
          <a href="facebook.com">
          <i class="fa-brands fa-google"></i>
          </a>
        </span>

        <span>
          {" "}
          <a href="facebook.com">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </span>

        <span>
          {" "}
          <a href="facebook.com">
          <i class="fa-brands fa-x-twitter"></i>
          </a>
        </span>

        <span>
          {" "}
          <a href="facebook.com">
          <i class="fa-brands fa-facebook"></i>
          </a>
        </span>
      </div>
    </Col>

    <Col lg="3" md="6" className="mb-4">
      <h6 className="fw-bold">Explore</h6>
      {/* <ListGroup className="link__list">
        {footerQuickLinks.map((item, index) => (
          <ListGroupItem key={index} className="border-0 ps-0 link__item">
            {" "}
            <a href={item.url}>{item.display}</a>
          </ListGroupItem>
        ))}
      </ListGroup> */}
    </Col>

    <Col lg="3" md="6" className="mb-4">
      <h6 className="fw-bold">Information</h6>
      {/* <ListGroup className="link__list">
        {footerInfoLinks.map((item, index) => (
          <ListGroupItem key={index} className="border-0 ps-0 link__item">
            {" "}
            <a href={item.url}>{item.display}</a>
          </ListGroupItem>
        ))}
      </ListGroup> */}
    </Col>

    <Col lg="3" md="6">
      <h6 className="fw-bold">Get in Touch</h6>

      <p>Address: Charotar University of Science & Technology
CHARUSAT Campus
Off. Nadiad-Petlad Highway, Changa 388 421
Anand, Gujarat, INDIA</p>
      <p> Phone: +91 9581494147 </p>
      <p>Email: info@charusat.ac.in</p>
    </Col>
  </Row>
</Container>
</footer>



</section>
  </div>
)

export default Footer
