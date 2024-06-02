import React, { useState } from "react";
import { FaCommentDots, FaShareAlt, FaUsers } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { GiPunchBlast } from "react-icons/gi";
import { MdOutlineBalance } from "react-icons/md";
import "./ProjectPage.css";
import Marquee from "react-fast-marquee";
import EcommerceImg from "../ProjectImages/EcommerceWeb.png";
import TaskImg from "../ProjectImages/TaskImg.png";
import MusicWeb from "../ProjectImages/MusicPlayerWeb.png";
import PortfolioImg from "../ProjectImages/PortfolioWeb.png";
import FitnessImg from "../ProjectImages/FitnessWeb.png";
import ChatBotImg from "../ProjectImages/ChatBotImg.png";
import SocialMediaImg from "../ProjectImages/SocialMediaImg.png";
import CommunityBuilImg from "../ProjectImages/CommunityBuild.png";

const ProjectCard = ({ title, level, description, icon, image }) => {
  // Function to determine the icon based on the project level
  const getIcon = () => {
    switch (level.toLowerCase()) {
      case "beginner":
        return <GiCoffeeCup />;
      case "medium":
        return <MdOutlineBalance />;
      case "advanced":
        return <GiPunchBlast />;
      default:
        return null;
    }
  };

  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={`${title} Image`} className="project-image" />
      )}
      <div className="project-heading">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="project-card-header"
        >
          <h3
            style={{
              fontSize: "1.5rem",
            }}
          >
            {title}
          </h3>{" "}
          <span
            style={{
              fontSize: "1.5rem",
            }}
          >
            {getIcon()}
          </span>{" "}
          {/* Display the icon */}
        </div>
      </div>
      <div className="project-card-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("mern"); // State to track active tab

  const frontendProjects = [
    {
      title: "Portfolio Website",
      level: "Beginner",
      description:
        "Build a personal portfolio website showcasing your projects, skills, experience, and contact information using HTML, CSS, and JavaScript.",
      image: PortfolioImg,
    },
    {
      title: "E-commerce Website",
      level: "Beginner",
      description:
        "Create a simple e-commerce website with product listings, a shopping cart, and checkout functionality using HTML, CSS, and JavaScript.",
      image: EcommerceImg,
    },
    {
      title: "Weather App",
      level: "Medium",
      description:
        "Develop a weather application that fetches data from an API and displays current weather conditions, forecasts, and location-based weather updates using React.js.",
      image: TaskImg,
    },
    {
      title: "Fitness Tracker",
      level: "Advanced",
      description:
        "Build a fitness tracking app where users can log their workouts, track progress, set goals, and view statistics using React.js and Redux for state management.",
      image: FitnessImg,
    },
    {
      title: "Music Player",
      level: "Advanced",
      description:
        "Create a web-based music player with features like playlist management, playback controls, and audio visualization using React.js and the Web Audio API.",
      image: MusicWeb,
    },
  ];

  const fullstackProjects = [
    {
      title: "Chatbot Webapp for Business (MERN)",
      level: "Beginner",
      description:
        "Build a chatbot web application with a backend that handles user inputs and responds with appropriate messages.",
      icon: <FaCommentDots />,
      image: ChatBotImg,
    },
    {
      title: "Social Media Manager (MERN)",
      level: "Medium",
      description:
        "Build a full-stack application for managing social media posts, including user authentication, post scheduling, and analytics.",
      icon: <FaShareAlt />,
      image: SocialMediaImg,
    },
    {
      title: "Community Building Platform (MERN)",
      level: "Advanced",
      description:
        "Develop a community platform with user authentication, group discussions, and resource sharing.",
      icon: <FaUsers />,
      image: CommunityBuilImg,
    },
  ];

  // Fullstack with Python projects
  const pythonProjects = [
    {
      title: "Python Fullstack Project 1",
      level: "Beginner",
      description:
        "Description for Python Fullstack Project 1.",
      image: EcommerceImg,
    },
    {
      title: "Python Fullstack Project 2",
      level: "Medium",
      description:
        "Description for Python Fullstack Project 2.",
      image: TaskImg,
    },
    // Add more Python projects as needed
  ];

  // UI/UX projects
  const uiuxProjects = [
    {
      title: "UI/UX Project 1",
      level: "Beginner",
      description:
        "Description for UI/UX Project 1.",
      image: PortfolioImg,
    },
    {
      title: "UI/UX Project 2",
      level: "Medium",
      description:
        "Description for UI/UX Project 2.",
      image: FitnessImg,
    },
    // Add more UI/UX projects as needed
  ];

  return (
    <div className="project-page-section">
      <div className="tab-section">
        <span onClick={() => setActiveTab("mern")} className={activeTab === "mern" ? "active-tab" : ""}>MERN</span>
        <span onClick={() => setActiveTab("fullstack")} className={activeTab === "fullstack" ? "active-tab" : ""}>Fullstack with Python</span>
        <span onClick={() => setActiveTab("uiux")} className={activeTab === "uiux" ? "active-tab" : ""}>UI/UX</span>
      </div>
      {activeTab === "mern" && (
        <>
          <div className="marquee">
            <Marquee>
              <span>
                Frontend Challenges: Take Your Skills to the Next Level with These
                Exciting Projects
              </span>
              <span>
                Frontend Challenges: Take Your Skills to the Next Level with These
                Exciting Projects
              </span>
              <span>
                Frontend Challenges: Take Your Skills to the Next Level with These
                Exciting Projects
              </span>
            </Marquee>
          </div>
          <div className="project-page">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="marquee">
            <Marquee>
              <span>
                MERN Challenges: Master the Full Stack with These Exciting Projects
              </span>
              <span>
                MERN Challenges: Master the Full Stack with These Exciting Projects
              </span>
              <span>
                MERN Challenges: Master the Full Stack with These Exciting Projects
              </span>
            </Marquee>
          </div>
          <div className="project-page">
            {fullstackProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </>
      )}
      {activeTab === "fullstack" && (
        <>
          <div className="marquee">
            <Marquee>
              <span>
                Fullstack with Python Projects: Explore the World of Fullstack Development with Python
              </span>
              <span>
                Fullstack with Python Projects: Explore the World of Fullstack Development with Python
              </span>
              <span>
                Fullstack with Python Projects: Explore the World of Fullstack Development with Python
              </span>
            </Marquee>
          </div>
          <div className="project-page">
            {pythonProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </>
      )}
      {activeTab === "uiux" && (
        <>
          <div className="marquee">
            <Marquee>
              <span>
                UI/UX Projects: Enhance User Experience and Design Skills with These Exciting Projects
              </span>
              <span>
                UI/UX Projects: Enhance User Experience and Design Skills with These Exciting Projects
              </span>
              <span>
                UI/UX Projects: Enhance User Experience and Design Skills with These Exciting Projects
              </span>
            </Marquee>
          </div>
          <div className="project-page">
            {uiuxProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPage;

