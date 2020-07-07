// ABRIR E FECHAR O MODAL //

const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


/*
    O EventListner espera o click para executar a função classList.add() para adicionar
    a classe active à classe modal-overlay, fazendo com que o modal seja visível após o 
    clique através da propriedade visible do seletor .modal-overlay.active do CSS.
*/

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    });
}

/*
    O EventListner espera o click na classe close-modal (svg close)para executar a
    função classList.remove() e remover a classe active da classe modal-overlay,
    fazendo com que o modal seja fechado, mantendo a propriedade visibility: hidden
    como default da classe modal-overlay em seu seletor no CSS.
*/

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
});

// COLOCANDO OS VÍDEOS CERTOS EM CADA CARD E FECHANDO O VÍDEO AO FECHAR O MODAL //