<!-- src/components/Interfaz.vue -->
<template>
  <div id="Interfaz">
    <img src="/public/storage/img/Logo.png" alt="">
    <div class="textoSin">
      <textarea v-model="inputText" placeholder="Ingrese el texto aquí"></textarea>
      <div>
        <button @click="handleEncrypt">Encriptar</button>
        <button @click="handleDecrypt">Desencriptar</button>
      </div>
    </div>
    <div class="textoCon">
      <textarea v-model="outputText" readonly placeholder="Resultado aquí"></textarea>
      <div>
        <button @click="handleCopy">Copiar</button>
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
 #Interfaz{
  height: 100vh;
  width: 100vw;
  
  display: grid;
  grid-template-columns: auto 3fr 2fr;
}

img{
  padding: 1em;
}

.textoSin{
  padding: 1em;
  
  background-color: transparent;
}
.textoCon{
  padding: 1em;

  background-color: transparent;
}

textarea{
  width: 90%;
  height: 90%;
 }

 button{
  margin: .5em 1em;
 }
  </style>
  