import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import HeroSection from "../components/Hero/HeroSection";
import Mid1 from "../components/mid/Mid1";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";
import Testimonial from "../components/Testinomials/Testimonial";
import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  const [treks, setTreks] = useState([]);
  const [topTreks, setTopTreks] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");

  // Add refs for scrolling
  const aboutRef = useRef(null);
  const treksRef = useRef(null);
  const testimonialRef = useRef(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "",
  });

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    api.get(`/api/treks`).then((res) => {
      setTreks(res.data);
      setTopTreks(res.data.filter((trek) => trek.isTopTrek));
    });

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonthIndex = new Date().getMonth();
    const range = `${months[currentMonthIndex]}-${
      months[(currentMonthIndex + 2) % 12]
    }`;
    setCurrentMonth(range);

    // Handle scroll when URL contains hash
    const hash = window.location.hash;
    if (hash === "#about") scrollToSection(aboutRef);
    if (hash === "#treks") scrollToSection(treksRef);
    if (hash === "#testimonials") scrollToSection(testimonialRef);
  }, []);

  // Pass scroll functions to Navbar
  const scrollFunctions = {
    scrollToAbout: () => scrollToSection(aboutRef),
    scrollToTreks: () => scrollToSection(treksRef),
    scrollToTestimonials: () => scrollToSection(testimonialRef),
  };

  return (
    <div className="home">
      <Navbar onScroll={scrollFunctions} />
      <HeroSection />

      <div className="top-treks-section">
        <h2>Top Treks in {currentMonth}</h2>
        <div className="treks-list">
          {topTreks.map((trek, index) => (
            <Link
              to={`/treks/${trek._id}`}
              key={trek._id}
              className="trek-card"
              style={index % 2 == 0 ? { marginTop: "50px" } : {}}
            >
              {trek.image && <img src={trek.image} alt={trek.name} />}
              <h3>{trek.name || "No Name"}</h3>
            </Link>
          ))}
        </div>
        {/* <h4 ><a>view more →</a></h4> */}
      </div>

      {/* Add ref to About section */}
      <div ref={aboutRef}>
        <Mid1 />
      </div>

      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <Gallery />

      {/* Add ref to Treks section */}
      {/* <div ref={treksRef}>
        <h2>All Treks</h2>
        <div className="treks-list">
          {treks.map((trek) => (
            <Link
              to={`/treks/${trek._id}`}
              key={trek._id}
              className="trek-card"
            >
              {trek.image && <img src={trek.image} alt={trek.name} />}
              <h3>{trek.name || "No Name"}</h3>
            </Link>
          ))}
        </div>
      </div> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
