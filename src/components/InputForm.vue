<script setup>
    import { ref } from "vue";
    import { store, calculate } from "../stores/store";
    
    
    const total = ref();
    const tip = ref();
    const people = ref();

    function handleSubmit(){
        store.params.total = total;
        store.params.tip = tip;
        store.params.people = people;
        calculate();
    }

</script>

<template>
    <div>
        <form action="" @submit.prevent="handleSubmit"> 
            <div class="form-container">
                <div class="datosMateria">
                    <h1> Trabajo 05: Página con Vue</h1>
                    <h2> Programación para Internet - I5909 - D03</h2>
                    <h2> Miguel Ángel Manzano Méndez</h2>
                </div>
                <h1 class="titulo"> ¡Divide tu cuenta!</h1>
                <div>
                    <label for="total">Total</label>
                    <input type="number" placeholder="Ingrese el total de la cuenta" required v-model="total">
                </div>

                <div>
                    <label for="tip">Propina (%)</label>
                    <input type="number" placeholder="Ingrese el porcentaje de la propina" required v-model="tip">
                </div>

                <div>
                    <label for="people">Personas</label>
                    <input type="number" placeholder="Personas que se dividirán la cuenta" required v-model="people">
                </div>

                <div>
                    <input type="submit" value="Calcular" class="boton">
                </div>
            </div>
        </form>
    </div>
    
</template>

<style scoped>

form{
    width: 400px;
    background-color: rgb(189, 99, 26);
    height: 120vh;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 18px;
    padding: 20px;
}

.form-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

form label{
    display: block;
}

form input{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
}

.boton{
    margin-top: 60px;
    background-color: rgb(46, 156, 65);
    border-radius: 4px;
}

.boton:Hover{
    background-color: rgb(38, 128, 53);
}

.titulo{
    margin-bottom: 30px;
}

.datosMateria{
    margin-bottom: 100px;
    border: solid 2px rgb(22, 75, 31);
}

h1{
    font-size: 25px;
    text-align: center;
    font-style: bolder;
}

h2{
    font-size: 20px;
    text-align: center;
}

</style>