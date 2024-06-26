import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CourseDetails.css";

import MernImg from "../ProjectImages/MERN.jpg";
import DjangoImg from "../ProjectImages/PY-DJ.jpg";
import UiUxImg from "../ProjectImages/UIUX.png";
import PiyushGargImg from "../ProjectImages/AvtarOne.jpg";
import AnupamPandeyImg from "../ProjectImages/AvtarThree.jpg";
import EmilyJohnsonImg from "../ProjectImages/AvtarTwo.jpg";

gsap.registerPlugin(ScrollTrigger);

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { courseId } = useParams();

  const courseData = {
    mern: {
      img: MernImg,
      title: "MERN Stack Development",
      rating: 4.5,
      description:
        "Learn full stack development with MongoDB, Express, React, and Node.js. Gain practical experience by building real-world projects and enhance your coding skills for a successful career in web development. This course is perfect for beginners and experienced developers alike, providing a comprehensive understanding of the MERN stack.",
      whatYouWillLearn: [
        "CRUD operations",
        "User authentication",
        "API integration",
        "State management",
        "Deployment strategies",
      ],
      syllabus: {
        frontend:
          "Learn React for creating dynamic user interfaces. Master state management with Redux, component-based architecture, and integration with backend services. Develop responsive and interactive front-end applications that provide an excellent user experience.",
        backend:
          "Understand how to build robust backend applications using Node.js and Express. Learn about RESTful APIs, middleware, and connecting with MongoDB. Develop scalable and efficient server-side applications.",
        fullStack:
          "Combine front-end and back-end skills to build full-stack applications. Cover user authentication, CRUD operations, and deployment strategies. Learn how to integrate front-end and back-end components seamlessly.",
      },
      instructor: {
        name: "Piyush Garg",
        profile:
          "Senior Full Stack Developer with 10 years of experience in building scalable web applications. Passionate about teaching and helping students build a solid foundation in web development. Piyush's expertise in both front-end and back-end technologies makes him an ideal instructor for this course.",
        rating: 4.8,
        students: 1200,
        courses: 5,
        reviews:
          "Piyush has received excellent feedback for his ability to break down complex concepts and provide hands-on learning experiences. His teaching style is engaging and easy to follow, making learning enjoyable and effective.",
        image: PiyushGargImg,
      },
    },
    python: {
      img: DjangoImg,
      title: "Python with Django",
      rating: 4.7,
      description:
        "Master web development with Python and Django framework. This course covers all the essential concepts, including ORM, Django admin, and deployment strategies to build robust web applications. Whether you're a beginner or looking to enhance your skills, this course provides a deep dive into Django.",
      whatYouWillLearn: [
        "Django ORM",
        "Django Admin",
        "Deployment",
        "Form handling",
        "User authentication",
      ],
      syllabus: {
        basics:
          "Get started with Python programming basics. Learn syntax, data structures, and object-oriented programming. Build a strong foundation in Python before diving into Django.",
        djangoCore:
          "Dive into Django framework. Learn about models, views, templates, and the Django ORM. Understand the core concepts and how to use Django to build powerful web applications.",
        advanced:
          "Cover advanced topics like Django admin, form handling, and deployment strategies. Build a complete web application and deploy it. Gain practical experience by working on real-world projects.",
      },
      instructor: {
        name: "Anupam Pandey",
        profile:
          "Expert Python Developer with 8 years of experience in Django development. Known for his deep understanding of Python and Django, and his dedication to student success. Anupam's practical approach to teaching ensures that students gain valuable hands-on experience.",
        rating: 4.9,
        students: 1000,
        courses: 3,
        reviews:
          "Anupam's students appreciate his in-depth knowledge and his practical approach to teaching. His clear explanations and detailed examples make learning Django a smooth and enjoyable process.",
        image: AnupamPandeyImg,
      },
    },
    uiux: {
      img: UiUxImg,
      title: "UI/UX Design",
      rating: 4.8,
      description:
        "Create stunning user interfaces and user experiences. Learn design principles, wireframing, prototyping, and user testing to craft engaging and intuitive designs that meet user needs and business goals. This course is ideal for anyone looking to enter the field of UI/UX design or enhance their existing skills.",
      whatYouWillLearn: [
        "Design principles",
        "Wireframing",
        "Prototyping",
        "User testing",
        "UI tools",
      ],
      syllabus: {
        designPrinciples:
          "Understand the fundamental principles of design. Learn about color theory, typography, and visual hierarchy. Develop a strong sense of aesthetics and how to apply design principles to create visually appealing interfaces.",
        wireframing:
          "Learn how to create wireframes to plan your designs. Use tools like Sketch and Figma to create detailed wireframes. Understand the importance of wireframing in the design process and how it helps in building a solid foundation for your designs.",
        prototyping:
          "Move from wireframes to prototypes. Learn how to create interactive prototypes and conduct user testing to refine your designs. Gain hands-on experience with tools and techniques used in the industry to create and test prototypes.",
      },
      instructor: {
        name: "Emily Johnson",
        profile:
          "Senior UI/UX Designer with 7 years of experience in creating user-centric designs. Emily is dedicated to helping students understand the importance of user experience and how to create visually appealing designs. Her passion for design and teaching makes her an excellent mentor for aspiring designers.",
        rating: 4.7,
        students: 900,
        courses: 4,
        reviews:
          "Emily's courses are highly rated for her clear explanations and practical approach to UI/UX design. Students appreciate her ability to make complex concepts simple and accessible, and her commitment to student success.",
        image: EmilyJohnsonImg,
      },
    },
  };

  const course = courseData[courseId];

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const syllabusRef = useRef(null);
  const instructorRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate Header
      tl.from(headerRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      }).from(
        imageRef.current,
        {
          duration: 1.5,
          opacity: 0,
          scale: 0.8,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1"
      );

      // Animate Tab Content
      if (activeTab === "overview") {
        gsap.from(descriptionRef.current.querySelectorAll("h2, p, ul, li"), {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      } else if (activeTab === "syllabus") {
        gsap.from(syllabusRef.current.children, {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: syllabusRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      } else if (activeTab === "instructor") {
        gsap.from(instructorRef.current, {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "power3.out",
          scrollTrigger: {
            trigger: instructorRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        gsap.from(instructorRef.current.querySelector(".instructor-image"), {
          duration: 1.5,
          opacity: 0,
          scale: 0.8,
          ease: "elastic.inOut(1, 0.3)",
          scrollTrigger: {
            trigger: instructorRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        gsap.from(instructorRef.current.querySelectorAll("img, p, span"), {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: instructorRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, [activeTab]);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div className="course-details-container">
      {course && (
        <div className="course-details-main">
          <div className="course-details-header" ref={headerRef}>
            <div className="course-details-top">
              {course.title && <h2>{course.title}</h2>}
              <div className="course-rating">
                <span>{course.rating}</span>
                <FaStar className="filled-star" />
              </div>
            </div>
            <div className="course-details-bottom">
              <div className="course-details-image" ref={imageRef}>
                {course.img && <img src={course.img} alt={course.title} />}
              </div>
            </div>
          </div>
          <div className="course-details-tabs">
            <span
              className={activeTab === "overview" ? "active" : ""}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </span>
            <span
              className={activeTab === "syllabus" ? "active" : ""}
              onClick={() => setActiveTab("syllabus")}
            >
              Syllabus
            </span>
            <span
              className={activeTab === "instructor" ? "active" : ""}
              onClick={() => setActiveTab("instructor")}
            >
              Instructor
            </span>
          </div>
          {course && activeTab === "overview" && (
            <div className="course-tab-content" ref={descriptionRef}>
              <h2>Description</h2>
              <div className="para">
                <p>Welcome to the Ultimate {course.title} course.</p>
                <p>{course.description}</p>
              </div>
              <h3>What You Will Master</h3>
              <ul>
                {course.whatYouWillLearn &&
                  course.whatYouWillLearn.map((item, index) => (
                    <li key={index}>
                      <FaCheck /> {item}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {course && activeTab === "syllabus" && (
            <div className="course-tab-content" ref={syllabusRef}>
              <h3>Our Syllabus</h3>
              {Object.keys(course.syllabus).map((section, index) => (
                <div className="syllabus" key={index}>
                  <h4>{section.replace(/([a-z])([A-Z])/g, "$1 $2")}</h4>
                  <p>{course.syllabus[section]}</p>
                </div>
              ))}
            </div>
          )}
          {course && activeTab === "instructor" && (
            <div className="course-tab-content" ref={instructorRef}>
              <h3>Meet Our Instructor</h3>
              <div className="instructor-details">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="instructor-image"
                />
                <p><strong>{course.instructor.name}</strong></p>
                <p>{course.instructor.profile}</p>
                <div className="instructor-span">
                  <span>
                    <FaStar /> Rating: {course.instructor.rating}
                  </span>
                  <span>
                    <FaCalendarAlt /> Enrolled Students:{" "}
                    {course.instructor.students}
                  </span>
                  <span>
                    <FaCheck /> Courses: {course.instructor.courses}
                  </span>
                  <p className="last-one">{course.instructor.reviews}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
