import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    image: "https://i.postimg.cc/k2YK3W8c/chandra.jpg",
    college: "Ayush Rana,IIT ROORKEE",
    text: "This vacation was absolutely amazing! Every day was planned out perfectly with a balance of relaxation and excitement. We explored hidden beaches, swam in crystal-clear waters, and enjoyed local cuisines. The hosts were incredibly welcoming and made sure we had the best experience.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/MnHtQ6m9/20231201-125345.jpg",
    college: "Samay Jain,IIT ROORKEE",
    text: "I can’t believe how fantastic this journey turned out to be! The itinerary had just the right amount of sightseeing and free time. From exploring historic landmarks to trying thrilling zipline rides, it was all so much fun. The organizers were friendly and always helpful.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/B88DqtBG/IMG20240929161704.jpg",
    college: "Riahabh Tayal,IIT ROORKEE",
    text: "What an incredible adventure this trip was! The mix of cultural experiences and outdoor activities was spot on. We visited ancient temples, went snorkeling in vibrant coral reefs, and even joined a lively local festival. The team made sure everything ran smoothly and that we had a blast.",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/JsFx3fTM/IMG-0749.avif",
    college: "Khusbhu Chandel,IIT ROORKEE",
    text: "This was hands-down the most memorable trip I’ve ever been on! The activities were perfectly varied—one day we were kayaking through peaceful rivers, and the next we were dancing under the stars. The guides were knowledgeable and so enthusiastic, making the trip even better..",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/N2tr7Dqg/IMG-1084.jpg",
    college: "Nitish Aggarwal,IIT DELHI",
    text: "This was the best trip ever! The plan for the trip was perfect and had a good mix of fun and adventurous activities. We went on mountain hikes and watched beautiful sunsets. The tour guides were really nice and kept us safe..",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({}); // Track flip state for each card

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => {
        const position =
          index === currentIndex
            ? "front"
            : index === (currentIndex + 1) % testimonials.length
            ? "right"
            : index ===
              (currentIndex - 1 + testimonials.length) % testimonials.length
            ? "left"
            : "hidden";

        const isFlipped = flippedCards[testimonial.id] || false;

        return (
          <div
            key={testimonial.id}
            className={`testimonial-card ${position} ${
              isFlipped ? "flipped" : ""
            }`}
            onMouseEnter={() => {
              if (window.innerWidth > 768) handleFlip(testimonial.id);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) handleFlip(testimonial.id);
            }}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={testimonial.image} alt={testimonial.college} />
                <p className="college-name">{testimonial.college}</p>
              </div>
              <div className="card-back">
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
            {/* Flip arrow only for mobile */}
            {window.innerWidth <= 768 && (
              <div
                className="flip-arrow"
                onClick={() => handleFlip(testimonial.id)}
              >
                 <img src="https://i.postimg.cc/9FkBRbDQ/icons8-circled-up-right-50-1.png" alt="Flip Arrow" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
