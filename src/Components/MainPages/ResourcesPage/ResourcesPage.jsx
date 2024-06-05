import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChalkboardTeacher,
  FaBook,
  FaProjectDiagram,
  FaLaptop,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";
import ResourcesPageImg from "../ProjectImages/ResourcesPage.png";
import ResoucesMain from "../ProjectImages/ResourcesMain.png";
import "./ResourcesPage.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ResourcesPage() {
  const comp = useRef(null);
  const headingRef = useRef(null);
  const mainImageRef = useRef(null);
  const benefitsImageRef = useRef(null);
  const benefitsRef = useRef([]);
  benefitsRef.current = [];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Main heading animation
      gsap.from(headingRef.current, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Main image bubble zoom animation
      gsap.from(mainImageRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: mainImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Benefits image bubble zoom animation
      gsap.from(benefitsImageRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: benefitsImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Benefits items animation
      benefitsRef.current.forEach((benefit, index) => {
        gsap.from(benefit, {
          duration: 1,
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: benefit,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !benefitsRef.current.includes(el)) {
      benefitsRef.current.push(el);
    }
  };

  const benefits = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Instructors",
      description:
        "Learn from industry experts who bring real-world experience into the classroom. Our instructors ensure high-quality education and practical insights for your career.",
    },
    {
      icon: <FaBook />,
      title: "Comprehensive Curriculum",
      description:
        "Our courses cover all aspects to provide a thorough understanding. From foundational concepts to advanced topics, our curriculum meets today's job market demands.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Hands-On Projects",
      description:
        "Apply your knowledge with practical projects that reinforce learning. Deepen your understanding and build a portfolio for potential employers.",
    },
    {
      icon: <FaLaptop />,
      title: "Flexible Learning Options",
      description:
        "Access course materials anytime, anywhere, and learn at your own pace. Our platform accommodates your schedule and learning preferences.",
    },
    {
      icon: <FaUsers />,
      title: "Engaging Community Support",
      description:
        "Join a supportive community of learners. Collaborate, ask questions, and share insights with peers and instructors.",
    },
    {
      icon: <FaBriefcase />,
      title: "Comprehensive Career Services",
      description:
        "Benefit from personalized support to land your dream job in tech. Our career services team assists with career goals, job search strategies, resume polishing, and interview preparation.",
    },
  ];

  return (
    <div className="resources-page" ref={comp}>
      <div className="resources-container">
        <div className="resources-main">
          <div className="main-heading" ref={headingRef}>
            <h2>Explore Our Comprehensive Resources</h2>
          </div>
          <div className="resources-image">
            <img src={ResoucesMain} alt="Resources" ref={mainImageRef} />
          </div>
        </div>

        <div className="benefits-section">
          <div className="main-heading">
            <h2 style={{
            fontFamily : "var(--Text-Font)",
            marginTop : "2rem"
          }}>Benefits</h2>
          </div>
          <div className="benefits-container">
            <div className="benefits-column-one">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="benefit-item" ref={addToRefs}>
                  <div className="icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="benefits-image">
              <img src={ResourcesPageImg} alt="Benefits" ref={benefitsImageRef} />
            </div>
            <div className="benefits-column-two">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div key={index} className="benefit-item" ref={addToRefs}>
                  <div className="icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
