const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const proposalBox = document.getElementById('proposal-box');
const celebration = document.getElementById('celebration');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    proposalBox.classList.add('hidden');
    celebration.classList.remove('hidden');
    startHearts();
});

function startHearts() {
    // Optional: Add simple heart-dropping logic here if desired
}
