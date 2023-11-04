document.addEventListener('DOMContentLoaded', () => {
    const artContainer = document.getElementById('art-container');

    document.addEventListener('mousemove', (event) => {
        createArt(event.pageX, event.pageY);
    });

    function createArt(x, y) {
        const artElement = document.createElement('div');
        artElement.className = 'art';
        setArtPosition(artElement, x, y);
        artContainer.appendChild(artElement);

        setTimeout(() => {
            artElement.remove();
        }, 2000);
    }

    function setArtPosition(artElement, x, y) {
        const size = Math.random() * 30 + 10;
        const color = getRandomColor();

        artElement.style.width = `${size}px`;
        artElement.style.height = `${size}px`;
        artElement.style.backgroundColor = color;
        artElement.style.position = 'absolute';
        artElement.style.left = `${x - size / 2}px`;
        artElement.style.top = `${y - size / 2}px`;
        artElement.style.borderRadius = '50%';
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
