import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaChalkboardTeacher,
  FaBook,
  FaProjectDiagram,
  FaLaptop,
  FaUsers,
  FaBriefcase,
  FaReact,
  FaPython,
  FaPalette,
  FaPaintBrush,
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaCode,
  FaTools,
  FaFileAlt,
  FaSlack,
  FaGithub,
  FaDatabase,
  FaBolt,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import { SiFlask } from "react-icons/si";
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

  const webDevelopmentResources = [
    {
      category: "MERN Stack",
      resources: [
        {
          icon: <FaReact />,
          name: "React",
          description:
            "A JavaScript library for building user interfaces, widely used in the MERN stack for creating dynamic and responsive web applications.",
          link: "https://reactjs.org/",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          description:
            "A JavaScript runtime built on Chrome's V8 engine, used for building fast and scalable server-side applications.",
          link: "https://nodejs.org/",
        },
        {
          icon: <FaDatabase />,
          name: "MongoDB",
          description:
            "A NoSQL database that stores data in flexible, JSON-like documents, making it easy to integrate with JavaScript applications.",
          link: "https://www.mongodb.com/",
        },
        {
          icon: <FaJs />,
          name: "Express.js",
          description:
            "A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.",
          link: "https://expressjs.com/",
        },
      ],
    },
    {
      category: "Fullstack with Python",
      resources: [
        {
          icon: <FaPython />,
          name: "Django",
          description:
            "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
          link: "https://www.djangoproject.com/",
        },
        {
          icon: <SiFlask />,
          name: "Flask",
          description:
            "A lightweight WSGI web application framework in Python, known for its simplicity and flexibility.",
          link: "https://flask.palletsprojects.com/",
        },
        {
          icon: <FaDatabase />,
          name: "PostgreSQL",
          description:
            "A powerful, open-source object-relational database system with over 30 years of active development.",
          link: "https://www.postgresql.org/",
        },
        {
          icon: <FaHtml5 />,
          name: "HTML5",
          description:
            "The latest evolution of the standard that defines HTML, including new elements, attributes, and behaviors.",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS3",
          description:
            "The latest version of the CSS standard, offering new features and capabilities for enhancing the presentation of web pages.",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
        },
      ],
    },
    {
      category: "UI/UX Design",
      resources: [
        {
          icon: <FaPalette />,
          name: "Adobe XD",
          description:
            "A vector-based user experience design tool for web apps and mobile apps, enabling wireframing, UI design, and prototyping.",
          link: "https://www.adobe.com/products/xd.html",
        },
        {
          icon: <FaPaintBrush />,
          name: "Sketch",
          description:
            "A digital design app from Mac, focusing on UI/UX design, offering a wide range of features for designing interfaces and prototyping.",
          link: "https://www.sketch.com/",
        },
        {
          icon: <FaFileAlt />,
          name: "InVision",
          description:
            "A prototyping, collaboration, and workflow platform for designers, helping teams to navigate every stage of the product design process.",
          link: "https://www.invisionapp.com/",
        },
        {
          icon: <FaTools />,
          name: "Axure",
          description:
            "A wireframing and prototyping tool that helps UX designers create interactive prototypes and specifications.",
          link: "https://www.axure.com/",
        },
        {
          icon: <FaCode />,
          name: "Balsamiq",
          description:
            "A rapid wireframing tool that reproduces the experience of sketching on a whiteboard but using a computer.",
          link: "https://balsamiq.com/",
        },
      ],
    },
    {
      category: "Productivity and Collaboration Tools",
      resources: [
        {
          icon: <FaBolt />,
          name: "Notion",
          description:
            "An all-in-one workspace for note-taking, project management, and collaboration, which has seen increased adoption for its versatility.",
          link: "https://www.notion.so/",
        },
        {
          icon: <FaSlack />,
          name: "Slack",
          description:
            "A messaging app for teams that brings all your communication together, integrating with a wide variety of tools.",
          link: "https://slack.com/",
        },
        {
          icon: <FaGithub />,
          name: "GitHub",
          description:
            "A code hosting platform for version control and collaboration, allowing developers to work together on projects from anywhere.",
          link: "https://github.com/",
        },
        {
          icon: <FaCogs />,
          name: "Jira",
          description:
            "An issue and project tracking software used by agile teams to plan, track, and release software.",
          link: "https://www.atlassian.com/software/jira",
        },
        {
          icon: <FaLightbulb />,
          name: "Trello",
          description:
            "A collaboration tool that organizes your projects into boards, lists, and cards, making project management more visual and efficient.",
          link: "https://trello.com/",
        },
      ],
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
            <h2 style={{ fontFamily: "var(--Text-Font)", marginTop: "2rem" }}>
              Benefits
            </h2>
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
              <img
                src={ResourcesPageImg}
                alt="Benefits"
                ref={benefitsImageRef}
              />
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

        <div className="marquee" style={{ marginBottom: "-2rem" }}>
          <Marquee>
            <span>
              {" "}
              Click on a card to explore and improve your tech skills, with a
              cup of coffee!{" "}
            </span>
            <span>
              {" "}
              Click on a card to explore and improve your tech skills, with a
              cup of coffee!{" "}
            </span>
          </Marquee>
        </div>

        {webDevelopmentResources.map((category, index) => (
          <section className="benefit-web-card" key={index}>
            <div className="main-heading">
              <h2>{category.category}</h2>
              <p>
                Stay updated with the latest trends and tools in{" "}
                {category.category.toLowerCase()} to enhance your skills and
                productivity.
              </p>
            </div>
            <div className="resource-category">
              <div className="resource-cards">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="resource-card">
         <div className="resource-icon">
  <p>{resource.icon}</p>{" "}
  <a
    href={resource.link}
    target="_blank"
    rel="noopener noreferrer"
    data-content="Click"
  >
    Connect
  </a>
</div>

                    <div className="resource-description">
                      <div className="resource-name">
                        <h3 style={{ marginBottom: "1rem" }}>
                          {resource.name}
                        </h3>
                      </div>
                      <p>{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ResourcesPage;
