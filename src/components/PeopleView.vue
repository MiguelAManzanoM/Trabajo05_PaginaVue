<script setup>
import { getGrandtotal, store } from "../stores/store";
import Label from "./Label.vue";
import Person from "./Person.vue";
</script>

<template>
    <div class="no-items" v-if="store.people.length == 0">Sin datos añadidos</div>
    <div class="people-view" v-if="store.people.length > 0">
        <div class="header">
            <div>
                <Label title="Total + Propina: " v-bind:value="getGrandtotal()" />
            </div>
            <div>
                <Label title="Faltante: " v-bind:value="store.params.remaining" />
            </div>
        </div>
        <div class="people-container">
            <Person 
                v-for="person in store.people" 
                v-bind:key="person.id"
                v-bind:id="person.id" 
                v-bind:number-of-person="person.numberOfPerson" 
                v-bind:total-per-person="person.totalPerPerson" 
                v-bind:paid="person.paid"
            />
        </div>
    </div>
</template>

<style scoped>

.no-items{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
}

.people-view{
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.people-container{
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
}

.header{
    font-weight: bolder;
    padding: 20px 0;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
    color: #870296;
}
</style>