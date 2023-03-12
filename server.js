const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.get("/", function (req, res) {
  res.send("Contact Management BackEnd");
});
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(error.message));