import { addBugCard } from "../components/bugCard.js"

const bugPanel = document.getElementById('bugPanel');
const addBugButton = document.getElementById('addButton');

let i = 0;

addBugButton.addEventListener('click', () => {
    addBugCard(bugPanel, `Card: ${i}`, "NANANANANANA")
    i++;
});