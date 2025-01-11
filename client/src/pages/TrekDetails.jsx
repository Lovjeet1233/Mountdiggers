import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './../components/RegistrationForm';
import './TrekDetails.css';


import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Testimonial from './../components/Testinomials/Testimonial';
function TrekDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [trek, setTrek] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL || ''
    });

    useEffect(() => {
        axios.get(`/api/treks/${id}`).then((res) => setTrek(res.data));
    }, [id]);

    if (!trek) return <div>Loading...</div>;

    return (
        <>
        <div className="trek-details">
            {showForm ? (
                <RegistrationForm trekName={trek.name} />
            ) : (
                <>
                <Navbar></Navbar>
                    <div className="trek-image-container">
                        <img src={trek.image} alt={trek.name} className="trek-details-image" />
                        <div className="image-overlay">
                            <div className="trek-details-content">
                                <div>
                                <h1>{trek.name}</h1>
                                <div className='info-row'>
                                <h3>{trek.price} INR</h3>
                                <h3>{trek.duration}</h3>
                                </div>
                             
                                </div>
                                <button
                                    className="register-button"
                                    onClick={() => navigate(`/treks/${id}/register`)}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                      
                    <h3><a href={trek.itineraryUrl} >Itinerary
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v10.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 12.293V1.5A.5.5 0 0 1 8 1z"/>
    </svg>
    </a></h3>
                    <div className="itinerary">
                        <div className="vertical-line"></div>
                        {trek.itinerary.map((step, index) => (
                            <div key={index} className="itinerary-step">
                                <div className="circle"></div>
                                <div className="step-text">
                                    <span className="step-title">{step.activity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
        <h3>Past Experiences</h3>
        <Testimonial></Testimonial>
        <Footer></Footer>
        </>
    );
}

export default TrekDetails;
