import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {

  console.log(import.meta.env.VITE_API_URL)
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || ''
});

  const [treks, setTreks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    duration: '',
    price: '',
    itinerary: [],
    isTopTrek: false,
    itineraryUrl: '', // Field for Itinerary URL
  });
  const [newDay, setNewDay] = useState({ day: '', activity: '' });
  const [editingTrekId, setEditingTrekId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTreks();
  }, []);

  const fetchTreks = async () => {
    try {
      const response = await api.get(`/api/treks`);
      setTreks(response.data);
    } catch (error) {
      console.error('Error fetching treks:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDayChange = (e) => {
    const { name, value } = e.target;
    setNewDay({
      ...newDay,
      [name]: value,
    });
  };

  const addItineraryStep = () => {
    setFormData({
      ...formData,
      itinerary: [...formData.itinerary, newDay],
    });
    setNewDay({ day: '', activity: '' });
  };

  const removeItineraryStep = (index) => {
    const updatedItinerary = formData.itinerary.filter((_, i) => i !== index);
    setFormData({ ...formData, itinerary: updatedItinerary });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trekData = {
        name: formData.name,
        image: formData.image,
        duration: formData.duration,
        price: formData.price,
        itinerary: JSON.stringify(formData.itinerary), // Convert to JSON string
        isTopTrek: formData.isTopTrek,
        itineraryUrl: formData.itineraryUrl, // Include the URL
      };

      console.log('Submitting trek data:', trekData); // Debug log

      if (isEditing) {
        await api.put(`/api/adminnn/treks/${editingTrekId}`, trekData);
      } else {
        await api.post(`/api/adminnn/treks`, trekData);
      }

      fetchTreks();
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const handleEdit = (trek) => {
    setIsEditing(true);
    setEditingTrekId(trek._id);
    setFormData({
      ...trek,
      itineraryUrl: trek.itineraryUrl || '', // Populate URL if it exists
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      image: '',
      duration: '',
      price: '',
      itinerary: [],
      isTopTrek: false,
      itineraryUrl: '', // Reset URL
    });
    setNewDay({ day: '', activity: '' });
    setIsEditing(false);
    setEditingTrekId(null);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/adminnn/treks/${id}`);
      fetchTreks();
    } catch (error) {
      console.error('Error deleting trek:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Admin Panel</h1>

      {/* Form to Add/Edit Treks */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Trek Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter trek name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className="form-control"
            placeholder="e.g., 2 days / 1 night"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (INR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Itinerary URL</label>
          <input
            type="text"
            name="itineraryUrl"
            value={formData.itineraryUrl}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter Google Drive or external link"
          />
        </div>
        <div className="mb-3">
          <h4>Itinerary</h4>
          <div className="input-group mb-2">
            <input
              type="text"
              name="day"
              value={newDay.day}
              onChange={handleDayChange}
              className="form-control"
              placeholder="Day Number"
            />
            <input
              type="text"
              name="activity"
              value={newDay.activity}
              onChange={handleDayChange}
              className="form-control"
              placeholder="Activity"
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={addItineraryStep}
            >
              Add Step
            </button>
          </div>
          <ul>
            {formData?.itinerary.map((step, index) => (
              <li key={index}>
                Day {step.day}: {step.activity}{' '}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItineraryStep(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="isTopTrek"
            checked={formData.isTopTrek}
            onChange={handleInputChange}
            className="form-check-input"
            id="topTrekCheckbox"
          />
          <label className="form-check-label" htmlFor="topTrekCheckbox">
            Mark as Top Trek
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Trek' : 'Add Trek'}
        </button>
        {isEditing && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={resetForm}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* Table of Treks */}
      <h2>Manage Treks</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Top Trek</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {treks.map((trek) => (
            <tr key={trek._id}>
              <td>{trek.name}</td>
              <td>
                <img src={trek.image} alt={trek.name} width="100" height="60" />
              </td>
              <td>{trek.duration}</td>
              <td>{trek.price}</td>
              <td>{trek.isTopTrek ? 'Yes' : 'No'}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(trek)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(trek._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
