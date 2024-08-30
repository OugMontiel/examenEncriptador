// src/components/Copiado.js

export function copyToClipboard(text) {
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
          alert("Error al copiar el texto: " + err);
        });
    } else {
      alert("No hay texto para copiar.");
    }
  }
  