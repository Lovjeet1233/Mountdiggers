import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FaArrowDown, FaCaretDown, FaCaretUp } from "react-icons/fa";

const FAQs = () => {
  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time for the Chopta Chandrashila trek?",
      answer:
        "Essential gear includes waterproof trekking boots, thermal clothing, a warm sleeping bag, and a sturdy backpack, and a water bottle. Don't forget sun protection and a first aid kit.",
    },
    {
      question: "What gear is needed for the Chopta Chandrashila trek?",
      answer:
        "Essential gear includes waterproof trekking boots, thermal clothing, a warm sleeping bag, and a sturdy backpack, and a water bottle. Don't forget sun protection and a first aid kit.",
    },
    {
      question: "What is the best time for the Chopta Chandrashila trek?",
      answer:
        "Essential gear includes waterproof trekking boots, thermal clothing, a warm sleeping bag, and a sturdy backpack, and a water bottle. Don't forget sun protection and a first aid kit.",
    },
    // Additional FAQs...
  ];

  const toggleFAQExpansion = (index) => {
    setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
  };

  return (
    <div className={styles.faqs}>
      <h4>FAQs</h4>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faq} ${
            expandedFAQIndex === index ? styles.expanded : ""
          }`}
          onClick={() => toggleFAQExpansion(index)}
        >
          <div className={styles.faqHeader}>
            <h3 className={styles.faqQuestion}>{faq.question}</h3>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleFAQExpansion(index);
              }}
            >
              {expandedFAQIndex === index ? <FaCaretUp /> : <FaCaretDown />}
            </div>
          </div>
          {expandedFAQIndex === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
