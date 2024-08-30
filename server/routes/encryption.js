// server/routes/encryption.js

const express = require('express');
const { encrypt, decrypt } = require('../controllers/encryptionController');

const router = express.Router();

// Ruta para encriptar texto
router.post('/encrypt', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }
  const encryptedText = encrypt(text);
  res.json({ result: encryptedText });
});

// Ruta para desencriptar texto
router.post('/decrypt', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }
  const decryptedText = decrypt(text);
  res.json({ result: decryptedText });
});

module.exports = router;
