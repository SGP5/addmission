import React, { useState } from "react";
import "./Addmission.css";
import axios from "axios";

const Addmission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [acpcRank, setAcpcRank] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      name,
      email,
      phone,
      dob,
      gender,
      country,
      category,
      field,
      acpcRank,
    };

    // Make an API request to your Node.js server to handle form submission
    try {
      await axios.post("http://localhost:8000/api/submit", formDataToSend);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(formDataToSend);
  };

  return (
    <div className="container-fluid colorful-form">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 mt-5">
          <h2 className="text-center mb-4">Admission Form</h2>
          <div>
            <div className="form-group">
              <label htmlFor="name">Name (As per Your 12th Marksheet)</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  required
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  required
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="other"
                  name="gender"
                  checked={gender === "Other"}
                  onChange={() => setGender("Other")}
                  required
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                className="form-control"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">---Select Country---</option>
                <option value="India">India</option>
                <option value="usa">United States</option>
                <option value="Russia">Russia</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">---Select Category---</option>
                <option value="general">General</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="obc">OBC</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="field">Field (Engineering)</label>
              <select
                className="form-control"
                id="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                required
              >
                <option value="">---Select Field---</option>
                <option value="IT">Information Technology</option>
                <option value="CE">Computer Engineering</option>
                <option value="CSE">Computer Science & Engineering</option>
                <option value="CL">Civil Engineering</option>
                <option value="EC">Electronics Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="ME">Mechanical Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="acpcRank">ACPC Rank</label>
              <input
                type="text"
                className="form-control"
                id="acpcRank"
                value={acpcRank}
                onChange={(e) => setAcpcRank(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addmission;