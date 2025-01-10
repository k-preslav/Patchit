import { addBugCard } from "../components/bugCard.js"

const bugPanel = document.getElementById('bugPanel');
const addBugButton = document.getElementById('addButton');

addBugButton.addEventListener('click', () => {
    addBugCard(bugPanel)
});