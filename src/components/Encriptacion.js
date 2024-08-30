// src/components/Encriptacion.js

const API_URL = 'http://localhost:3000/api/encryption';

export async function encryptText(text) {
  try {
    const response = await fetch(`${API_URL}/encrypt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error al encriptar:', error);
    return '';
  }
}

export async function decryptText(text) {
  try {
    const response = await fetch(`${API_URL}/decrypt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error al desencriptar:', error);
    return '';
  }
}
