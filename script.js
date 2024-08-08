document.addEventListener('DOMContentLoaded', () => {
    const pigeon = document.getElementById('pigeon');
    const pigeonImg = pigeon.querySelector('img');

    pigeonImg.addEventListener('click', () => {
        const maxX = window.innerWidth - pigeonImg.width;
        const maxY = window.innerHeight - pigeonImg.height;

        pigeon.style.left = `${Math.random() * maxX}px`;
        pigeon.style.top = `${Math.random() * maxY}px`;
    });
});
