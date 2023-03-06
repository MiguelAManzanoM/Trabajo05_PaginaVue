<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";

const email = ref("");
const password = ref("");

const userStore = useUserStore();

const register = () => {
  userStore.register(email.value, password.value);
};
</script>

<template>
  <div class="register">
    <h2>Crea un usuario</h2>
    <form @submit.prevent="register">
      <div class="register__input">
        <input type="email" required v-model="email"/>
        <label>Correo electrónico</label>
      </div>
      <div class="register__input">
        <input type="password" required v-model="password"/>
        <label>Contraseña</label>
      </div>
      <div class="centrar">
        <button class="register__submit" type="submit">Registrarse</button>
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
.register {
  margin: 100px auto;
  width: 400px;
  padding: 40px;
  background: #282828;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.register h2 {
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
}

.register .register__input {
  position: relative;
}

.register .register__input input {
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
.register .register__input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.register .register__input input:focus ~ label,
.register .register__input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f01b1b;
  font-size: 12px;
}

.register__submit {
  color: white;
  padding: 0.7em 1.7em;
  font-weight: 600;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e91c1c;
  border: none;
  cursor: pointer;
}

.register__submit:hover{
  background: #cf1919;
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
