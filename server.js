require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
app.use(express.json());
app.use('/api/users', require('./src/routes/userRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'CodeCraftHub user service is running' });
});

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});