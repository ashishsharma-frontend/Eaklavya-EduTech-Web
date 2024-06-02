import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaCheck,
  FaSearch,
  FaFilter,
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import CodingImg from "../ProjectImages/CodingImg.png";
import CourseMainImg from "../ProjectImages/CourseMainImg.png";
import MernImg from "../ProjectImages/MERN.jpg";
import DjangoImg from "../ProjectImages/PY-DJ.jpg";
import UiUxImg from "../ProjectImages/UIUX.png";
import GroupAvtar from "../ProjectImages/GroupAvtar.svg";
import "./CourseSection.css";
import Marquee from "react-fast-marquee";

function CourseSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const courses = [
    {
      id: "mern",
      img: MernImg,
      name: "MERN Stack Development",
      description:
        "Learn full stack development with MongoDB, Express, React, and Node.js. Gain practical experience by building real-world projects and enhance your coding skills for a successful career in web development.",
      date: "June 1, 2024 - August 31, 2024",
      rating: 4.5,
      numRatings: "1000",
      category: "web-development",
      enrollLink: "https://pages.razorpay.com/delta-feb",
    },
    {
      id: "python",
      img: DjangoImg,
      name: "Python with Django",
      description:
        "Master web development with Python and Django framework. This course covers all the essential concepts, including ORM, Django admin, and deployment strategies to build robust web applications.",
      date: "July 1, 2024 - September 30, 2024",
      rating: 4.7,
      numRatings: "850",
      category: "web-development",
      enrollLink: "https://www.udemy.com/cart/",
    },
    {
      id: "uiux",
      img: UiUxImg,
      name: "UI/UX Design",
      description:
        "Create stunning user interfaces and user experiences. Learn design principles, wireframing, prototyping, and user testing to craft engaging and intuitive designs that meet user needs and business goals.",
      date: "August 1, 2024 - October 31, 2024",
      rating: 4.8,
      numRatings: "1200",
      category: "web-design",
      enrollLink:
        "https://nextleap.app/design-fellowship/fp/fsfy9wwx90sp8y5odl",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (category) => {
    setFilter(category);
    setDropdownVisible(false);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearchTerm =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || course.category === filter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="tech-course-section">
      <div className="main-heading">
        <h2>Discover Our Tech Courses</h2>
      </div>
      <div className="tech-course-top">
        <div className="tech-course-left">
          <h2>
            Learn To{" "}
            <span
              style={{
                backgroundColor: "#FFDB5C",
                padding: "0 10px",
                borderRadius: "8px",
              }}
            >
              Code
            </span>{" "}
            Your , Dream And{" "}
            <span
              style={{
                backgroundColor: "#C3FF93",
                padding: "0 10px",
                borderRadius: "8px",
              }}
            >
              Design
            </span>{" "}
            Your Future.
          </h2>

          <img
            style={{
              maxWidth: "400px",
              marginTop: "1rem 0",
            }}
            src={GroupAvtar}
            alt=""
          />
        </div>
        <div className="tech-course-right">
          <div className="tech-image">
            <img src={CourseMainImg} alt="Main Course" />
          </div>
          <p>
            Discover a variety of courses designed to enhance your skills in
            technology and more. Whether you're looking to advance in your
            career or learn something new, we have the perfect course for you.
            So relax, take a sip of coffee, and start your learning journey with
            us.
          </p>
        </div>
      </div>
      <div className="marquee">
        <Marquee>
          <span>Our Coding Courses</span>
          <span>Our Coding Courses</span>
          <span>Our Coding Courses</span>
          <span>Our Coding Courses</span>
        </Marquee>
      </div>
      <div className="search-filter-section">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-dropdown">
          <div className="filter-dropdown-button">
            <span onClick={() => setDropdownVisible(!isDropdownVisible)}>
              <FaFilter />
            </span>
          </div>
          {isDropdownVisible && (
            <div
              style={{
                borderRadius: "8px",
              }}
              className="dropdown-menu"
            >
              <span onClick={() => handleFilter("all")}>All</span>
              <span onClick={() => handleFilter("web-development")}>
                Web Development
              </span>
              <span onClick={() => handleFilter("web-design")}>Web Design</span>
            </div>
          )}
        </div>
      </div>
      <div className="tech-course-cards">
        {filteredCourses.map((course, index) => (
          <div className="tech-course-card" key={index}>
            <img src={course.img} alt={course.name} className="course-image" />
            <div className="course-details">
              <h3 style={{ fontSize: "1.5rem" }}>{course.name}</h3>
              <p>{course.description}</p>
              <div
                style={{
                  display: "flex",
                  gap: "0.10rem",
                  alignItems: "center",
                }}
                className="course-rating"
              >
                {[...Array(5)].map((star, i) => (
                  <AiFillStar
                    style={{
                      color: "#FF6C22",
                    }}
                    key={i}
                    className={
                      i < Math.floor(course.rating)
                        ? "filled-star"
                        : "empty-star"
                    }
                  />
                ))}
                <span>
                  {course.rating} ({course.numRatings}+ ratings)
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                className="course-date"
              >
                <FaCalendarAlt
                  style={{
                    color: "#7BF1A8",
                  }}
                />{" "}
                {course.date}
              </div>
              <ul className="course-features">
                <li>
                  <FaCheck /> World-class
                </li>
                <li>
                  <FaCheck /> Flexible
                </li>
                <li>
                  <FaCheck /> Affordable
                </li>
                <li>
                  <FaCheck /> Job-related
                </li>
              </ul>
              <div className="course-buttons">
                <button>
                  <Link
                    to={`/course-details/${course.id}`}
                    className="know-more-button"
                  >
                    Know More
                  </Link>
                </button>
                <button>
                  <Link to={course.enrollLink} className="enroll-button">
                    Enroll
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tech-course-step">
        <img src={CodingImg} alt="" style={{ maxWidth: "200px" }} />
        <h2 style={{ marginBottom: "1.5rem" }}>
          Kickstart Your Coding Expedition with Ekalavya
        </h2>
        <p>
          Embark on a journey to enhance your skills and knowledge with our
          comprehensive courses. At Ekalavya, we focus on practical learning to
          ensure you gain real-world experience and grow your capabilities.
        </p>
        <div className="steps">
          {[
            {
              icon: <FaCode />,
              title: "Learn Courses",
              description:
                "Dive into a wide range of courses designed to improve your coding skills and technical knowledge.",
            },
            {
              icon: <FaProjectDiagram />,
              title: "Hands-on Projects",
              description:
                "Work on high-quality projects to apply your learning and build a strong portfolio.",
            },
            {
              icon: <FaGraduationCap />,
              title: "Grow Your Skills",
              description:
                "Continuously improve your skills and gain real experience to advance in your career.",
            },
          ].map((step, index) => (
            <div className="step" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h3 style={{ fontSize: "1.3rem", margin: "1.2rem 0" }}>
                {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
