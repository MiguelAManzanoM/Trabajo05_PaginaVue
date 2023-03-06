import { reactive } from "vue";

export const store = reactive({
    params: {
        total: 0,
        tip: 0,
        people: 0,
        ramaining: 0,
    },

    people: [],
});

export function getGrandtotal(){
    return store.params.total * (store.params.tip / 100 + 1);
}

export function calculate(){
    store.people = [];
    const total = store.params.total;
    const tip = store.params.tip;
    const people = store.params.people;
    const totalPerPerson = getGrandtotal() / people;

    store.params.remaining = getGrandtotal();

    for(let i = 0; i < people; i++){
        store.people.push({
            id: crypto.randomUUID(),
            numberOfPerson: i + 1,
            totalPerPerson,
            paid: false,
        });
    }

    calculateRemaining();
}

function calculateRemaining(){
    const missingToPay = store.people.filter(item => !item.paid);
    const remaining = missingToPay.reduce(
        (acc, item) => (acc += item.totalPerPerson),
        0
    );

    store.params.remaining = remaining;
}

export function pay(id, paid){
    const person = store.people.find(item => item.id == id);
    if(person){
        person.paid = paid;
        calculateRemaining();
    }
}