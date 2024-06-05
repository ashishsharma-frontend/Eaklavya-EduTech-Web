import React, { useRef, useEffect } from "react";
import "./DiscoverPage.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImage from "../ProjectImages/AboutMe.svg";
import TeamRishi from "../ProjectImages/Rishi.jpg";
import TeamAditya from "../ProjectImages/Aditya.jpg";
import TeamKetan from "../ProjectImages/Ketan.jpg";
import TeamMousam from "../ProjectImages/Mousham.jpg";
import ProjectSection from "../ProjectImages/ProjectSection.svg";

gsap.registerPlugin(ScrollTrigger);

function DiscoverPage() {
  const aboutSectionRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRefs = useRef([]);
  const teamSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const overviewRef = useRef(null);
  const teamCardsRef = useRef([]);

  const teamMembers = [
    {
      img: TeamRishi,
      name: "Rishi Shrivastv",
      skill: "MERN Stack",
    },
    {
      img: TeamAditya,
      name: "Aditya Pathak",
      skill: "Fullstack with Python",
    },
    {
      img: TeamKetan,
      name: "Ketan Rawat",
      skill: "UI/UX Design",
    },
    {
      img: TeamMousam,
      name: "Mousam kushwaha",
      skill: "MERN Stack",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(aboutImageRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: aboutImageRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    aboutTextRefs.current.forEach((text, index) => {
      gsap.from(text, {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: index * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(teamSectionRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    teamCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(projectSectionRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    })
      .from(overviewRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      })
      .from(overviewRef.current.children, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power3.out",
      });
  }, []);

  return () => ctx.revert();
}, []);

  return (
    <div className="discover-page">
      <div className="main-heading">
        <h2>What About Ekalavya?</h2>
      </div>
      <section className="about-section" ref={aboutSectionRef}>
        <img ref={aboutImageRef} src={AboutImage} alt="About Us" />

        <div className="about-content">
          <h2 ref={(el) => (aboutTextRefs.current[0] = el)}>About Us</h2>
          <span ref={(el) => (aboutTextRefs.current[1] = el)}>Hey There!</span>
          <p ref={(el) => (aboutTextRefs.current[2] = el)}>
            Passion fuels our work, as we craft innovative solutions with our
            trusty laptops. Our expertise spans diverse fields, ensuring
            tailored excellence in every project. From mastering frontend with
            React.js to delving into Next.js, Python, and Django for backend
            development, our journey is one of relentless learning and growth.
          </p>
          <p ref={(el) => (aboutTextRefs.current[3] = el)}>
            Embracing the joy of learning, we've cultivated an educational
            platform where students can thrive. With no barriers to hinder their
            progress, they can sip coffee while honing their skills. Our
            mission? To nurture fully skilled professionals, one code snippet at
            a time.
          </p>
          <div className="cards-section">
            <div className="card">
              <h3>02+ Yrs</h3>
              <p>Experience</p>
            </div>
            <div className="card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div className="card">
              <h3>500+</h3>
              <p>Happy Students</p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section" ref={teamSectionRef}>
        <div className="marquee">
          <Marquee>
            <span>Meet Our Team: Dedicated to Helping Students</span>
            <span>Meet Our Team: Dedicated to Helping Students</span>
            <span>Meet Our Team: Dedicated to Helping Students</span>
            <span>Meet Our Team: Dedicated to Helping Students</span>
          </Marquee>
        </div>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={index}
              ref={(el) => (teamCardsRef.current[index] = el)}
            >
              <div className="team-image">
                <img src={member.img} alt={member.name} />
              </div>
              <p>{member.name}</p>
              <h4>{member.skill}</h4>
            </div>
          ))}
        </div>
      </section>
      <div className="marquee">
        <Marquee>
          <span>
            Practice Projects: Turn Knowledge into
            Real-World Applications
          </span>
          <span>
            Hands-On Projects: Apply Your Learning and Master Your Craft
          </span>
          <span>
            Practice Zone: Dive into Real Projects and Boost Your Confidence
          </span>
          <span>
            Real-World Projects: Practice and Perfect Your Coding Abilities
          </span>
        </Marquee>
      </div>
      <div className="project-section" ref={projectSectionRef}>
        <img src={ProjectSection} alt="Project Ideas" />
        <div className="course-overview" ref={overviewRef}>
          <h2>Master the Latest Tech Trends: Complete Course and Practice Projects</h2>
          <p>Enhance your coding skills and stay ahead in the tech industry with our comprehensive course. Designed for all levels, from beginners to advanced learners, this course offers a robust curriculum to help you master essential technologies and build impressive projects. After completing the course, take on our project challenges to solidify your knowledge and become a proficient coder.</p>
          <p>Whether you're starting out or looking to advance your skills, our practice projects cover a range of topics and difficulty levels. Grab a coffee, dive into coding, and watch your skills grow as you tackle each challenge.</p>
          <Link to="/projectpage">
            <button style={{marginTop: "1.5rem"}} className="view-button">View Project Ideas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;
