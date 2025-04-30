document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title').innerText;
        const imgSrc = card.querySelector('img').src;
        const description = card.querySelector('.card-text').innerText;

        document.getElementById('modalLabel').innerText = title;
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalDescription').innerText = description;
        
        new bootstrap.Modal(document.getElementById('animalModal')).show();
    });
});
