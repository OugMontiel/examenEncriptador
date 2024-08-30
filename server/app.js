// server/app.js

const express = require('express');
const cors = require('cors');
const encryptionRoutes = require('./routes/encryption');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/encryption', encryptionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
