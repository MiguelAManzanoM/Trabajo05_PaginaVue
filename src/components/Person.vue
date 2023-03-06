<script setup>
import { defineProps, ref } from 'vue';
import { pay } from "../stores/store.js";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);
let paidRef = ref(false);

function handleChange(event){
    paidRef = event.target.checked;

    pay(props.id, paidRef);
}
</script>

<template>
    <div v-bind:class="['person', props.paid ? 'person-paid' : 'person-no-paid']">
        <div class="person-number">
            Persona #{{ props.numberOfPerson }}
        </div>
        <div class="person-to-pay">
            {{ 
                new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(props.totalPerPerson)
            }}
        </div>
        <div class="paid">
            <input type="checkbox" id="" name="" v-on:change="handleChange"/>  Pagado
        </div>
    </div>
</template>

<style scoped>
.person{
    height: 200px;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.person-paid{
    border: solid 3px yellowgreen;
}

.person-no-paid{
    border: solid 3px rgb(168, 14, 14);
}

.person-number{
    background-color: black;
    padding: 10px;
    color: white;
    text-align: center;
}

.person-to-pay{
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    color: yellowgreen;
}

.paid{
    background-color: #3b0041;
    padding: 10px;
    color: white;
    text-align: center;
}
</style>