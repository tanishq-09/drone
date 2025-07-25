const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const healthRoutes = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', healthRoutes);

// ...add more routes as needed...

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/health to check the API status`);
});