import React from "react";
import Footer from "./Footer/Footer";
import Navbar from './Navbar/Navbar';
const Terms = () => {
  return (
    <>
    <Navbar></Navbar>
     <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-8 px-4 md:px-16"
      style={{
        backgroundImage: "url('https://i.postimg.cc/2SFdRdps/Group.png')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-black/70 backdrop-blur-md shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 border-b-4 border-gray-400 pb-3">
          Terms and Conditions
        </h1>
        <p className="text-white text-lg leading-relaxed mb-8">
          By using the services of Mount Diggers Travels Private Limited, you
          agree to the following terms and conditions:
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Eligibility</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            All customers must be at least 18 years old or have the consent of
            a legal guardian to make a booking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Booking Confirmation</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Bookings are confirmed upon receipt of payment. An acknowledgment
            will be sent via email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Itinerary Changes</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Mount Diggers reserves the right to modify itineraries due to
            unforeseen circumstances such as weather conditions or governmental
            restrictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Liability</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            We are not responsible for any injuries, losses, or damages incurred
            during the tours or treks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Customer Responsibility</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Participants are responsible for ensuring they meet the physical and
            health requirements of the selected packages.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-white text-lg mt-4 leading-relaxed">
            Detailed terms and conditions are available on our website.
          </p>
        </section>

        <h2 className="text-3xl font-bold text-blue-400 mt-12 mb-8">Cancellation and Refund Policy</h2>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Cancellation by Customer</h3>
          <ul className="text-white text-lg mt-4 list-disc pl-8 leading-relaxed">
            <li>More than 30 days before the start date: 80% refund.</li>
            <li>15-30 days before the start date: 50% refund.</li>
            <li>Less than 15 days before the start date: No refund.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Cancellation by Mount Diggers</h3>
          <p className="text-white text-lg mt-4 leading-relaxed">
            In the unlikely event of cancellation from our side, a full refund
            or alternative arrangement will be offered.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-300">Processing Time</h3>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Refunds will be processed within 7-10 working days.
          </p>
        </section>

        <h2 className="text-3xl font-bold text-blue-400 mt-12 mb-8">Shipping and Delivery Policy</h2>
        <section>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Mount Diggers Travels Private Limited operates online and does not
            involve physical delivery of products. All tour and trek package
            details, confirmations, and relevant documents will be sent
            electronically to the registered email address of the customer.
          </p>
        </section>
      </div>
    </div>
    <Footer></Footer>
    </>
   
  );
};

export default Terms;
