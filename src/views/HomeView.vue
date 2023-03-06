<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="texts">
      <h1 class="texts__title">Autentificación con Vue JS y Firebase 9</h1>
      <h2 style="margin-bottom: 20px;">Miguel Ángel Manzano Méndez - 217814621</h2>
      <h3>Programación Para Internet - I5909 - D03</h3>
    </div>
  </header>
  <section class="buttons">
    <router-link class="buttons__btn buttons__btn--login" to="/login"
      >Iniciar Sesion</router-link
    >

    <router-link class="buttons__btn buttons__btn--register" to="/register"
      >Regístrate</router-link
    >
  </section>
</template>

<style scoped>
header {
  width: 100%;
  height: 250px;
  background-color: rgb(194, 88, 18);
  color: white;
  text-align: center;
  margin-bottom: 50px;
}

.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts__title {
  font-size: 45px;
  margin-bottom: 40px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--login:hover {
  background-color: #27ca89;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #f53131;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
</style>
