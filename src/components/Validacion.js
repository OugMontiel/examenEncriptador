// src/components/Validacion.js

export function validateInput(text) {
    // Permitir solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
  }
  