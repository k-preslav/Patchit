export function addBugCard(bugPanel, title, description) {
    const bugCard = document.createElement('div');
    bugCard.classList.add('bug-card');

    bugCard.innerHTML = `
        <h3>${title}</h3>
        <p>${truncateText(description, 150)}</p>
        <button class="removeButton">Remove</button>
    `;

    bugCard.querySelector('.removeButton').addEventListener('click', () => {
        bugCard.remove();
    });

    bugPanel.appendChild(bugCard);
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}