import React, { useState, useEffect, useRef } from "react";
import "./ContactPage.css";
import ContactPageImg from "../ProjectImages/ContactPage.svg";
import gsap from "gsap";

const Talk = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const mainHeadingRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation for main heading
    tl.from(mainHeadingRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
    })
      // Animation for image
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
      })
      // Animation for paragraph
      .from(paragraphRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
      // Animation for form
      .from(formRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
  }, []);

  return () => ctx.revert();
}, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all details are entered
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Handle form submission logic here
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      alert("Form submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="talk-container">
      <div className="main-title" ref={mainHeadingRef}>
        <h1>Let's</h1>
        <h1>Chat</h1>
        <h1>With Me</h1>
      </div>
      <div className="talk-content">
        <div className="text-content">
          <div className="talk-main-heading">
            <h1 ref={mainHeadingRef}>Hey</h1>
            <h1 ref={mainHeadingRef}>Let's Make</h1>
            <h1 ref={mainHeadingRef}>Something Great.</h1>
          </div>
          <img
            style={{
              maxWidth: "350px",
              marginTop: "2.5rem",
            }}
            src={ContactPageImg}
            alt=""
            ref={imageRef}
          />
          <div className="main-paragraph" ref={paragraphRef}>
            <p>
              Crafting beautiful code is a delightful art in web development and
              design. It's a symphony of creativity and precision, a dance of
              pixels and logic. With coffee in hand, the magic unfolds. Enhance
              your tech skills with our comprehensive courses and resources.
              Contact us today and start your journey towards mastering the
              digital world.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button style={{
            opacity: "1",
            marginTop : "-2rem"
          }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Talk;
