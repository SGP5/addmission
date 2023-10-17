import React from 'react'
import './Inquiry.css'
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "ContactUS",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];


const Inquiry = () => {
  return (
    <>  
    <header>
       <div className="imghead">
       <img src="../images/3.jpg" alt="" srcset="" />
       </div>

    
    </header> 
  
  <div className="main">

 
  <div className="heading">
  <strong> 
How to Apply?
</strong> 
  </div>
<div className="imgbody">
<img src="../images/2.png" alt="" sizes="" srcset="" />
</div>


<div className="link">
 
<label >
  
  <span>
  <h3>
  For Addmission click on Buttton    
  </h3>
  </span>
  
 
</label> 
 
 <div className="submit">


<button className="button-85" role="button">
  <div className="a">
  <Link to ='/NewAddmisssion' >Addmission</Link>
  </div>

  </button>




 </div>


</div>
  

<section >
 <div id="about">
<div className="about-1">
  <h1>About US</h1>
<p>
'A+' GRADE BY NAAC <br />
120 ACRES OF LUSH GREEN CAMPUS<br />
24 HOURS FREE WIFI WITH 1550 MBPS INTERNET BANDWIDTH<br />
STATE OF THE ART IT TECHNOLOGY - CLOUD READY ENVIRONMENT<br />
DISTINGUISHED QUALIFIED FACULTY<br />
HI-TECH TEACHING AND RESEARCH LABS ACCESSIBLE 24-HOURS<br />
INTENSIVE INDUSTRIAL EXPOSURE THROUGH PROJECTS AND INDUSTRIAL TRAINING<br />
CLINICAL EXPOSURE AT CHARUSAT HOSPITAL<br />
EXCLUSIVE FITNESS CENTER, GYMNASIUM, INDOOR AND OUTDOOR SPORTS FACILITIES<br />
MENTOR-MENTEE AND STUDENT WELLNESS PROGRAM<br />
HOSTEL FACILITY WITH AC & NON-AC ROOMS<br />

  </p>

</div>
<div className="about-2"> 
<div className="content-box-lg">
  <div className="conyainer">
    <div className="row">
      <div className="col-md-4">
        <div className="about-item text-center">
          <i className='fa fa-book'>
            <h2>MISSION</h2>
            <hr />
            <p>To prepare world-class technocrats and researchers and facilitate enhanced deployment of technology for betterment of lives.</p>
          </i>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-item text-center">
          <i className='fa fa-pencil'>
            <h2>ACHIEVEMENTS</h2>
            <hr />
            <p>The National Assessment and Accreditation Council, Government of India has accredited DA-IICT with an ‘A’ Grade.</p>
          </i>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-item text-center">
          <i className='fa fa-globe'>
            <h2>VISSION</h2>
            <hr />
            <p>To help build a knowledge-led society founded on intellectual competitiveness for global leadership.To remain accountable in our core and support function.</p>
          </i>
        </div>
      </div>
    </div>
  </div>
</div>
  
</div>
 

 
 


 </div>



</section>
 

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
      <ListGroup className="link__list">
        {footerQuickLinks.map((item, index) => (
          <ListGroupItem key={index} className="border-0 ps-0 link__item">
            {" "}
            <a href={item.url}>{item.display}</a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>

    <Col lg="3" md="6" className="mb-4">
      <h6 className="fw-bold">Information</h6>
      <ListGroup className="link__list">
        {footerInfoLinks.map((item, index) => (
          <ListGroupItem key={index} className="border-0 ps-0 link__item">
            {" "}
            <a href={item.url}>{item.display}</a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>

    <Col lg="3" md="6">
      <h6 className="fw-bold">Get in Touch</h6>

      <p>Address: Sylhet, Bangladesh</p>
      <p> Phone: +88 0123456789 </p>
      <p>Email: example@gmail.com</p>
    </Col>
  </Row>
</Container>
</footer>



</section>



</div>
    
    
    </>
  )
}

export default Inquiry