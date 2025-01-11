import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-white text-lg leading-relaxed mb-8">
          Mount Diggers Travels Private Limited ("we," "our," or "us") is
          committed to safeguarding the privacy of our customers. We collect
          and use personal information solely for the purpose of providing and
          improving our trekking and tour services. By using our website and
          services, you consent to the collection, use, and sharing of your
          information as described in this policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Information Collection</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, and payment details when you book a package
            or register on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Usage of Information</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            The information collected will be used to process bookings, improve
            customer service, and send relevant updates or promotional material.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Data Protection</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            We implement robust security measures to protect your data from
            unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Third-Party Sharing</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties, except as required to process payments or comply with
            legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">Cookies</h2>
          <p className="text-white text-lg mt-4 leading-relaxed">
            Our website may use cookies to enhance your browsing experience.
          </p>
        </section>

        <section>
          <p className="text-white text-lg mt-4 leading-relaxed">
            For further details, please refer to our comprehensive Privacy
            Policy on our website.
          </p>
        </section>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
