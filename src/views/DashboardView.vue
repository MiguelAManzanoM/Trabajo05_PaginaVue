<script setup>
import { useUserStore } from "../stores/user";
import SplitBillView from '../components/SplitBillView.vue';

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
};
</script>

<template>
  <div class="container">
  <SplitBillView />
  <div class="cerrarSesion">
    <button class="buttons__btn buttons__btn--logout" @click.preven="logout">Cerrar Sesión</button>
  </div>
  </div>
</template>

<style scoped>

.title {
  font-size: 3.5rem;
  margin-bottom: 50px;
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
  margin-top: 50px;
  margin-bottom: 20px;
}

.cerrarSesion{
  text-align: center;
}

.buttons__btn--logout:hover {
  background-color: #f53131;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
</style>
