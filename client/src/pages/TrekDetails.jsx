import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RegistrationForm from "./../components/RegistrationForm";
import "./TrekDetails.css";

import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Testimonial from "./../components/Testinomials/Testimonial";
import { AvailabilityCard } from "../components/AvailabilityCard";
import { TrekStats } from "../components/TrekStatsContainer";
import { FaDownload } from "react-icons/fa";
import { TrekHero } from "../components/Hero/TrekHero";
import FAQs from "../components/Faq";
function TrekDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trek, setTrek] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "",
  });

  useEffect(() => {
    api.get(`/api/treks/${id}`).then((res) => setTrek(res.data));
  }, [id]);

  if (!trek) return <div>Loading...</div>;

  return (
    <>
      <div className="trek-details">
        {showForm ? (
          <RegistrationForm trekName={trek.name} />
        ) : (
          <>
            <Navbar />
            <TrekHero
              title={trek.name}
              duration={trek.duration}
              price={trek.price}
              imageUrl={trek.image}
            />
            <div className="trek-header">
              <h3 className="trek-itinerary-heading">Travel Itinerary</h3>
              <button
                className="itinerary-button"
                onClick={() => window.open(trek.itineraryUrl)}
              >
                Itinerary
                <FaDownload style={{ marginLeft: "14px" }} />
              </button>
            </div>
            <TrekStats />
            <div className="itinerary">
              <div className="vertical-line"></div>
              <div className="itinerary-step-cont">
                {trek.itinerary.map((step, index) => (
                  <div key={index} className="itinerary-step">
                    <div className="circle"></div>
                    <div
                      className="step-text"
                      style={
                        index % 2 == 0
                          ? { marginLeft: "auto", textAlign: "left" }
                          : {}
                      }
                    >
                      <span className="step-title">{step.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <AvailabilityCard />
            </div>
          </>
        )}
      </div>
      <h3>Past Experiences</h3>
      <Testimonial />
      <FAQs />
      <Footer />
    </>
  );
}

export default TrekDetails;
