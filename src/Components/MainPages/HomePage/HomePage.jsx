import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import backgroundVideo from "../ProjectImages/Home.mp4";
import TopMainImg from "../ProjectImages/TopMain.svg";
import MERNImg from "../ProjectImages/MERN.jpg";
import UIUXImg from "../ProjectImages/UIUX.png";
import PYDJ from "../ProjectImages/PY-DJ.jpg";
import Marquee from "react-fast-marquee";
import ManOne from "../ProjectImages/01.svg";
import ManTwo from "../ProjectImages/02.svg";
import ManThree from "../ProjectImages/03.svg";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const comp = useRef(null);
  const maintext = useRef(null);
  const mainimgRef = useRef(null);
  const homeimgRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialTextRef = useRef(null);
  const testimonialCardRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline for home text and image animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: maintext.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(maintext.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power3.out",
      })
        .from(
          maintext.current.querySelector("h1"),
          {
            duration: 0.8,
            opacity: 0,
            y: 20,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          maintext.current.querySelector("p"),
          {
            duration: 0.8,
            opacity: 0,
            y: 20,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          maintext.current.querySelector("button"),
          {
            duration: 0.8,
            opacity: 1,
            y: 20,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Main image bubble zoom animation
      gsap.from(homeimgRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: homeimgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      

      // Course cards animation
      const courseElements = document.querySelectorAll(".course-card");
      courseElements.forEach((course) => {
        gsap.from(course, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: course,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Testimonial text animation
      gsap.from(testimonialTextRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Testimonial card animation
      gsap.from(testimonialCardRef.current, {
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialCardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, comp);

    gsap.fromTo(
      mainimgRef.current,
      { scale: 0.8, opacity: 0 },
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainimgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );    

    return () => ctx.revert();
  }, []);

  return (
    <div className="introduction-container" ref={comp}>
      <div className="home-content">
        <div className="home-text">
          <div className="home-main-text" ref={maintext}>
            <h1>Welcome to Eaklavya Tech In India</h1>
            <p style={{ maxWidth: "850px", marginBottom: "-1rem" }}>
              Discover your potential with our extensive range of coding and
              design courses. Gain practical skills from industry leaders,
              engage in interactive projects, and become a part of a thriving
              community of learners. Empower yourself with knowledge,
              collaborate with like-minded peers, and step confidently into the
              future of technology.
            </p>
            <Link to="/discover">
              <button className="cta-button">Explore Courses</button>
            </Link>{" "}
          </div>
          <img src={TopMainImg} alt="Top Main" ref={mainimgRef} />
        </div>
        <div className="video" ref={homeimgRef}>
          <video className="background-video" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="marquee">
        <Marquee>
          <span>
            Take our top coding course—learn to code perfectly with coffee in
            hand. Mastery in every sip!
          </span>
        </Marquee>
      </div>

      {/* Featured Courses Section */}
      <div className="featured-courses">
        <div className="featured-courses-top">
          <h2>Brew Your Best Tech Skills Over Coffee</h2>
          <p>
            Discover our handpicked selection of top-notch courses and embark on
            your learning journey today. Unleash your potential and shape your
            future with EduTech India.
          </p>
        </div>
        <div className="course-cards" ref={coursesRef}>
          <CourseCard
            image={MERNImg}
            title="MERN Stack Development"
            description="Master MongoDB, Express, React, and Node.js to build powerful and scalable web applications."
            link="/course-details/mern"
          />
          <CourseCard
            image={PYDJ}
            title="Fullstack with Python Django"
            description="Learn to build full-fledged web applications with Python and Django, covering both frontend and backend."
            link="/course-details/python"
          />
          <CourseCard
            image={UIUXImg}
            title="UI/UX Design"
            description="Understand the fundamentals of user interface and user experience design to create engaging digital products."
            link="/course-details/uiux"
          />
        </div>
      </div>

      <div className="marquee">
        <Marquee>
          <span>Our Student Reviews</span>
          <span>Our Student Reviews</span>
          <span>Our Student Reviews</span>
          <span>Our Student Reviews</span>
          <span>Our Student Reviews</span>
        </Marquee>
      </div>

      <div className="testimonial-cards">
        <TestimonialCarousel
          textRef={testimonialTextRef}
          cardRef={testimonialCardRef}
        />
      </div>
    </div>
  );
}

function CourseCard({ image, title, description, link }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>
        <button
          style={{
            width: "100%",
          }}
          className="cta-button"
        >
          Learn More
        </button>
      </Link>
    </div>
  );
}

function TestimonialCarousel({ textRef, cardRef }) {
  const testimonials = [
    {
      name: "Satvik Pandey",
      image: ManOne,
      review:
        "The MERN stack course was incredibly comprehensive. The projects were practical and engaging, helping me to grasp complex concepts effortlessly.",
    },
    {
      name: "Kunal Sharma",
      image: ManTwo,
      review:
        "EduTech India's courses are top-notch! The Fullstack with Python Django course offered deep insights and hands-on experience that enhanced my skills significantly.",
    },
    {
      name: "Harshit Rathore",
      image: ManThree,
      review:
        "A truly transformative experience! The UI/UX design course opened up new career opportunities for me, thanks to the exceptional teaching and comprehensive curriculum.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    gsap.to(carouselRef.current, {
      duration: 0.5,
      opacity: 0,
      x: -50,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        gsap.fromTo(
          carouselRef.current,
          { x: 50 },
          { duration: 0.5, opacity: 1, x: 0 }
        );
      },
    });
  };

  const goToPrev = () => {
    gsap.to(carouselRef.current, {
      duration: 0.5,
      opacity: 0,
      x: 50,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        gsap.fromTo(
          carouselRef.current,
          { x: -50 },
          { duration: 0.5, opacity: 1, x: 0 }
        );
      },
    });
  };

  return (
    <div className="carousel-main-container">
      <div className="carousel-heading" ref={textRef}>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            marginBottom: "1.5rem",
          }}
        >
          Insights from Our Valued Students
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
          }}
        >
          Gain invaluable insights into the transformative learning experiences
          of our esteemed students at EduTech India. Explore their testimonials
          to discover how our courses have propelled their careers and empowered
          them with cutting-edge skills.
        </p>
      </div>
      <div className="carousel-container">
        <FaArrowLeft className="carousel-arrow left" onClick={goToPrev} />
        <div className="carousel-cards" ref={carouselRef}>
          <div className="carousel-card" ref={cardRef}>
            <div className="carousel-content">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
              />
              <h3>{testimonials[currentIndex].name}</h3>
              <p>" {testimonials[currentIndex].review} "</p>
            </div>
          </div>
        </div>
        <FaArrowRight className="carousel-arrow right" onClick={goToNext} />
      </div>
    </div>
  );
}

export default HomePage;
