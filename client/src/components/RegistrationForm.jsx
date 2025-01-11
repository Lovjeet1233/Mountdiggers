import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function RegistrationForm({ trekName }) {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        company: '',
        city: '',
        phone: '',
        whatsapp: '',
        email: '',
        address: '',
        state: '',
        referralCode: '',
        additionalMembers: [],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            access_key: 'e86278b8-7b0e-42ea-9753-cf8348395a2a',
            subject: `Trek Registration - ${trekName}`,
            ...formData,
        };

        axios
            .post('https://api.web3forms.com/submit', payload)
            .then(() => alert('Registration successful!'))
            .catch(() => alert('An error occurred. Please try again.'));
    };

    return (
        <>
        <Navbar></Navbar>
        <form className="registration-form" onSubmit={handleSubmit}>
    <h1>Registration Details</h1>
    <p>Fill in the registration for the trek. It will take a couple of minutes.</p>

    <div className="grid-container">
        <div className="grid-item">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div className="grid-item">
            <label htmlFor="gender">Gender</label>
            <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
            >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="grid-item">
            <label htmlFor="dob">Date of Birth</label>
            <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
            />
        </div>
        <div className="grid-item">
            <label htmlFor="company">Company/College Name</label>
            <input
                type="text"
                id="company"
                name="company"
                placeholder="Company/College Name"
                value={formData.company}
                onChange={handleChange}
            />
        </div>
        <div className="grid-item">
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
            />
        </div>
        <div className="grid-item">
            <label htmlFor="phone">Phone Number</label>
            
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
            />
        </div>
        <div className="grid-item">
            <label htmlFor="whatsapp">WhatsApp Number</label>
            <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
            />
        </div>
        <div className="grid-item">
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div className="grid-item">
            <label htmlFor="address">Address</label>
            <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
            />
        </div>
        <div className="grid-item">
            <label htmlFor="state">State</label>
            <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
            />
        </div>
        <div className="grid-item">
            <label htmlFor="referralCode">Referral Code</label>
            <input
                type="text"
                id="referralCode"
                name="referralCode"
                placeholder="Referral Code"
                value={formData.referralCode}
                onChange={handleChange}
            />
        </div>
    </div>

    <button type="submit">Submit</button>
</form>
<Footer></Footer>
</> );
  
}

export default RegistrationForm;
