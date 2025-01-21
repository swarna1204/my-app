import React, { useState } from "react";

const MyStateComponent = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    // Optionally, reset the form fields
    setFormData({ name: "", age: "" });
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
