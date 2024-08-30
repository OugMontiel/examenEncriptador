<!-- src/App.vue -->
<template>
  <div id="app">
    <Interfaz />
  </div>
</template>

<script>
import Interfaz from './components/Interfaz.vue';

export default {
  name: 'App',
  components: {
    Interfaz
  }
};
</script>

<style>

body{
    margin:0;
    padding: 0 ;
    background-color: var(--bg-secondary);
}
#app {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
