export function addBugCard(bugPanel) {

    const bugCard = document.createElement('div');
    bugCard.classList.add('bug-card');

    bugCard.innerHTML = `
        <h3>Bug Title</h3>
        <p>Description of the bug goes here...</p>
        <button class="removeButton">Remove</button>
    `;

    bugCard.querySelector('.removeButton').addEventListener('click', () => {
        bugCard.remove();
    });

    bugPanel.appendChild(bugCard);
}