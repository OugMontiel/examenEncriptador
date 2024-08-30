<!-- src/components/Interfaz.vue -->
<template>
  <div id="Interfaz">
    <div class="img">
      <img src="/public/storage/img/Logo.png" alt="">
    </div>
    <div class="textoSin">
      <textarea v-model="inputText" placeholder="Ingrese el texto aquí"></textarea>
      <p>
        <img src="/public/storage/img/IconoExclamacion.png" alt="icono">
        Solo letras minúsculas y sin acentos
      </p>
      <div class="btn">
        <button @click="handleEncrypt">Encriptar</button>
        <button @click="handleDecrypt">Desencriptar</button>
      </div>
    </div>
    <div class="textoCon">
      <div class="targeta">
        <textarea v-model="outputText" readonly placeholder="Resultado aquí"></textarea>
        <div class="btn">
          <button @click="handleCopy">Copiar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { encryptText, decryptText } from './Encriptacion.js';
import { validateInput } from './Validacion.js';
import { copyToClipboard } from './Copiado.js';

export default {
  data() {
    return {
      inputText: '',
      outputText: '',
    };
  },
  methods: {
    handleEncrypt() {
      if (validateInput(this.inputText)) {
        this.outputText = encryptText(this.inputText);
      } else {
        alert("Por favor, ingrese solo letras minúsculas sin caracteres especiales ni acentos.");
      }
    },
    handleDecrypt() {
      if (validateInput(this.inputText)) {
        this.outputText = decryptText(this.inputText);
      } else {
        alert("Por favor, ingrese solo letras minúsculas sin caracteres especiales ni acentos.");
      }
    },
    handleCopy() {
      copyToClipboard(this.outputText);
    }
  }
};
</script>

<style scoped>
#Interfaz {
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: auto 3fr 2fr;
}

.img {
  padding: 1em;
}

img {
  object-fit: contain;
  box-sizing: border-box;
}

.textoSin {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.textoSin textarea {
  padding-top: 3em;
  color: var(--color-secondary);
}

.btn {
  display: flex;
  justify-content: space-between;
}

.textoCon {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

textarea {
  flex-grow: 1;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 1em;
}

button {
  flex-grow: 1;
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
  background-color: transparent;
  border: 1px solid var(--bg-button-prymary);
  transition: background-color 0.3s, border-color 0.3s;
}

button:hover {
  background-color: var(--bg-button-prymary);
  border-color: var(--bg-button-secondary);
  color: var(--bg-quarter);
}

p {
  margin: 0;
  font-size: .8rem;
}

.targeta {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-quarter);
  border-radius: 1.5em;
}

.targeta textarea {
  color: var(--color-tertiary);
}
@media (max-width: 1200px) {
  #Interfaz {
  display: grid;
  grid-template-columns: auto;
}
}
@media (max-width: 800px) {
  .btn {
  flex-direction: column;
}
}
</style>
