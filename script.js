document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Adiciona uma animação de entrada suave
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease-in-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
        }, 200 * index);
    });

    console.log("Portfólio UNIP carregado com sucesso!");
});