const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint to get the Firebase key
app.get("/get-firebase-key", (req, res) => {
res.json({ firebaseKey: process.env.FIREBASE_KEY });
});

// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
