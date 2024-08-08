// Código da lanterna
let lanterna = document.querySelector(".lanterna")
let mensagem = document.querySelector(".msg")
let lanternaLigada = false

document.addEventListener('keydown', function (event) {
    if (event.key == 'f' || event.key == 'F') {
        if (!lanternaLigada) {
            ligarLanterna();
            mensagem.style.display = 'none' // remove o aviso de tecla quando a lanterna é ligada pela primeira vez
        } else {
            desligarLanterna();
        }
    }
});

function ligarLanterna() {
    lanternaLigada = true

    // Adiciona o evento de mouse para simular a lanterna
    document.addEventListener('mousemove', moverLanterna)
};

function desligarLanterna() {
    lanternaLigada = false

    // Remove o evento de mouse quando a lanterna estiver desligada
    document.removeEventListener('mousemove', moverLanterna)

    // Desliga a lanterna removendo a mascara de recorte
    lanterna.style.webkitMaskImage = 'none'
};

function moverLanterna(event) {
    // Calcula as coordenadas(posiçao) do cursor do mouse em relaçao a página...
    let x = event.pageX + "px";
    let y = event.pageY + "px"; // ... e as formata em uma string com unidade de px(pixels)

    // Adiciona a máscara de recorte para simular a lanterna
    lanterna.style.webkitMaskImage = `radial-gradient(circle at ${x}  ${y}, transparent 130px, black 20%)`;

};

// Código que escolhe um background aléatorio

// Caminho das imagens
let caminhoDasImagens = [
    'imagens/fnaf.jpg',
    'imagens/paisagem.jpg',
    'imagens/navios.jpg',
    'imagens/corredor.jpg',
    'imagens/corredor2.jpg',
    'imagens/corredor3.jpeg'
];

//Escolhe aleatoriamente um caminho
let caminhoAleatorio = caminhoDasImagens[Math.floor(Math.random() * caminhoDasImagens.length)]

// Atribui o caminho aleatório escolhido para o src da imagem
let imagemAleatoria = document.getElementById('imagemAleatoria')
imagemAleatoria.src = caminhoAleatorio
