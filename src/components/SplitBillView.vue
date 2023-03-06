<script setup>
import InputForm from './InputForm.vue';
import PeopleView from './PeopleView.vue';


</script>

<template>
    <div class="contenedor">
        <InputForm />
        <PeopleView />
    </div>
</template>

<style scoped>
.contenedor{
    display: flex;
    background-color: rgb(21, 21, 22);
}
</style>