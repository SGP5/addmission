import React from 'react'
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../src/assests/images/hero-img1.png"; 
import aboutImg from "../../src/assests/images/about-us.png";
import courseImg1 from "../../src/assests/images/web-design.png";
import courseImg2 from "../../src/assests/images/graphics-design.png";
import courseImg3 from "../../src/assests/images/ui-ux.png";
import CountUp from "react-countup";
import Slider from "react-slick";
import './Abc.css'
import img from "../../src/assests/images/testimonial01.png";
import CourseCard from '../components/Courses-section/CourseCard' 
import courseImg01 from "../../src/assests/images/web-development.png";
import courseImg02 from "../../src/assests/images/kids-learning.png";
import courseImg03 from "../../src/assests/images/seo.png";
import courseImg04 from "../../src/assests/images/ui-ux.png";
import FreeCourseCard from "../components/Free-course-section/FreeCourseCard";
import { ListGroup, ListGroupItem } from "reactstrap";
const coursesData = [
  {
    id: "01",
    title: "Computer science",
    lesson: 12,
    students: 12.5,
    rating: 4.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Information Technology",
    lesson: 12,
    students: 12.5,
    rating: 4.0,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Artificial intelligence",
    lesson: 12,
    students: 12.5,
    rating: 4.5,
    imgUrl: courseImg3,
  },
];

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",
  },
];
const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
};

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


const Abc = () => {
  return (
<>  
{/*-------------------------------> 1*/} 
<section>
<Container>
  <Row>
    <Col lg="6" md="6">
      <div className="hero__content">
        <h2 className="mb-4 hero__title">
          Take a Addmission <br />  your best collage <br /> with affordable Price
        </h2>
        <p className="mb-5">
        Charotar University of Science and Technology (CHARUSAT) is established under the Gujarat  Act No. 8 of 1995, Government of Gujarat.  <br />University Grants Commission (UGC) has empowered CHARUSAT to award Degrees under Section 22 of UGC Act 1956 adipisicing elit.
          
        </p>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="btn">Search</button>
      </div>
    </Col>

    <Col lg="6" md="6">
      <img src={heroImg} alt="" className="w-100 hero__img" />
    </Col>
  </Row>
</Container>

</section>

{/*-------------------------------> 2*/} 
{/* <section>
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-vimeo-line"></i> CHARUSAT
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-pinterest-line"></i> NIRMA 
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-dribbble-line"></i> DDU
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-apple-fill"></i> MSU
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-finder-fill"></i> Finder
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section> */}
{/*-------------------------------> 3*/} 
    <section>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__img">
            <img src={aboutImg} alt="" className="w-100" />
          </div>
        </Col>

        <Col lg="6" md="6">
          <div className="about__content">
            <h2>About Us</h2>
            <p>
            CHARUSAT offers 72 programs from UG to PhD under the 9 Institutes and 6 Faculties. They are in the allied disciplines of Technology & Engineering, Pharmacy, Computer Applications, Management Studies, Applied Sciences, Nursing, Physiotherapy, and Paramedical Sciences.
            </p>

            <div className="about__counter">
              <div className=" d-flex gap-5 align-items-center">
                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={5} duration={2} suffix="K" />
                  </span>

                  <p className="counter__title">Chandubhai S Patel Institute of Technology</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={3} duration={2} suffix="k" />
                  </span>

                  <p className="counter__title">Devang Patel  Institute of Technology</p>
                </div>
              </div>

              <div className=" d-flex gap-5 align-items-center">
                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={3.5} duration={2} suffix="k" />
                  </span>

                  <p className="counter__title">Indukaka Ipcowala Institute of Management
</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={5} duration={2} suffix="K" />
                  </span>

                  <p className="counter__title">Ramanbhai Patel College of Pharmacy</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

{/*-------------------------------> 4*/} 
  <section>
  <Container>
    <Row>
      <Col lg="12" className="mb-5">
        <div className="course__top d-flex justify-content-between align-items-center">
          <div className="course__top__left w-50">
            <h2>Popular News</h2>
            <p>
            Chandubhai S Patel Institute of Technology, is the first institute established in year 2000 at Education Campus, Changa (now CHARUSAT). 
            </p>
          </div>

          <div className="w-50 text-end">
            <button className="btn">See All</button>
          </div>
        </div>
      </Col>
      {coursesData.map((item) => (
        <Col lg="4" md="6" sm="6">
          <CourseCard key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  </Container>
</section>
 
 
{/*-------------------------------> 5*/} 
 

{/*-------------------------------> 6*/} 

<section>
<Container>
  <Row>
    <Col lg="12" className="text-center mb-5">
      <h2 className="fw-bold">Our Free Courses</h2>
    </Col>

    {freeCourseData.map((item) => (
      <Col lg="3" md="4" className="mb-4" key={item.id}>
        <FreeCourseCard item={item} />
      </Col>
    ))}
  </Row>
</Container>
</section>

{/*-------------------------------> 7*/} 

<section>
<Container>
  <Row>
    <Col lg="10" md="12" className="m-auto">
      <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
        <div className="testimonial__img w-50">
          <img src={img} alt="" className="w-100" />
        </div>

        <div className="testimonial__content w-50">
          <h2 className="mb-4">Our Students Voice</h2>

          <Slider {...settings}>
            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">
                  Excellent course of materials
                </h6>
                <p>
                It's great to see that your college offers opportunities for alumni to continue learning through workshops, seminars, and online courses
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">Het shah</h6>
                  <p>Nadiad, Gujrat</p>
                </div>
              </div>
            </div>

            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">
                  Excellent and Good
                </h6>
                <p>
                ampus life primarily revolves around academics. Students attend classes, engage with professors, and participate in discussions and lectures
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">Nadim </h6>
                  <p>surat, Gujrat</p>
                </div>
              </div>
            </div>

            <div>
              <div className="single__testimonial">
                <h6 className="mb-3 fw-bold">
                 Not forgettable
                </h6>
                <p>
                Commencement ceremonies mark the culmination of a student's academic journey, and they are a significant part of campus life.
                </p>

                <div className="student__info mt-4">
                  <h6 className="fw-bold">jiya patel</h6>
                  <p>Ahemdabad, Gujrat</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Col>
  </Row>
</Container>
</section>

{/*-------------------------------> 8*/} 

<section>
<Container className="newsletter">
  <Row>
    <Col lg="12" className="text-center">
      <h2 className="mb-4">Email</h2>
      <div className="subscribe">
        <input type="text" placeholder="Email" />
        <button className="btn">Subscribe</button>
      </div>
    </Col>
  </Row>
</Container>
</section>
{/*-------------------------------> 9*/} 
 

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

</>
  )
}

export default Abc