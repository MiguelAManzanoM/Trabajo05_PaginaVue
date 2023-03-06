<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";

const email = ref("");
const password = ref("");

const userStore = useUserStore();

const login = () => {
  userStore.login(email.value, password.value);
};
</script>

<template>
  <div class="login">
    <h2>Entra con tu usuario</h2>
    <form @submit.prevent="login">
      <div class="login__input">
        <input type="text" required v-model="email"/>
        <label>Correo electrónico</label>
      </div>
      <div class="login__input">
        <input type="password" required v-model="password"/>
        <label>Contraseña</label>
      </div>
      <div class="centrar">
        <button class="login__submit" type="submit">Iniciar Sesión</button>
      </div>
    </form>
    <div class="regresar">
      <router-link class="buttons__btn botonRegresar" to="/"
      >Ir a Inicio</router-link
      >
    </div>
  </div>
</template>

<style>
.login {
  margin: 100px auto;
  width: 400px;
  padding: 40px;
  background: #282828;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login h2 {
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
}

.login .login__input {
  position: relative;
}

.login .login__input input {
  font-size: 18px;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login .login__input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login .login__input input:focus ~ label,
.login .login__input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login__submit {
  color: #1b1c1b;
  padding: 0.7em 1.7em;
  font-weight: 600;
  font-size: 18px;
  border-radius: 0.5em;
  background: #14b18a;
  border: none;
  cursor: pointer;
}

.login__submit:hover{
  background: #0f8567;
}

.centrar{
  text-align: center;
}

.regresar{
  margin-top: 30px;
  text-align: center;
}

.botonRegresar{
  font-size: 18px;
  color: #e312ff;
}
</style>
