const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/retail_dashboard');

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
