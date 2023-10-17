const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const path = require("path");

const app = express();
const port =  8000;

// MongoDB Connection
mongoose.connect("mongodb+srv://dhrupalmavani:dhrupal@cluster0.iykeu8i.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose Schema for Admission
const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: Date,
  gender: String,
  country: String,
  category: String,
  field: String,
  acpcRank: String,
});

const Admission = mongoose.model("Admission", admissionSchema);

// Middleware for JSON request body parsing
app.use(cors());
app.use(express.json());

app.post("/api/submit", async (req, res) => {
  try {
    // Create a new admission record
    const admission = new Admission(req.body);

    // Save the data
    const savedData = await admission.save();

    // Send the response with all fields
    res.json({ message: "Form submitted successfully!", data: savedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error submitting form." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});