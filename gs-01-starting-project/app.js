Vue.createApp({
    data() {
        return {
            goal: [],
            enteredValue: ""
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.eneterdValue);
        }
    }
}).mount("#app");

/* const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listel = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEl.value;
    const listItemel = document.createElement('li');
    listItemel.textContent = enteredValue;
    listel.appendChild(listItemel);
    inputEl.value = "";
};

buttonEl.addEventListener('click', addGoal); */