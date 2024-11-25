let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    if (items.length > 0) {
        document.querySelector('.slide').appendChild(items[0]);    }
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    if (items.length > 0) {
        document.querySelector('.slide').prepend(items[items.length - 1]); }
});


function toggleContent(button) {
    const moreContent = button.previousElementSibling; // Seleciona o conteúdo adicional
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block"; // Comando para mostrar o conteúdo
        button.textContent = "Veja menos"; // Comando para alterar o texto do botão
    } else {
        moreContent.style.display = "none"; // Comando para esconder o conteúdo
        button.textContent = "Veja mais"; // Comando que restaura o texto do botão
    }
}