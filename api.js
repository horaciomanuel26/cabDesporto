const url = 'https://horaciomanuel26.github.io/_service/noticias/noticias_jogos.json';
const baseImagem = 'https://horaciomanuel26.github.io/_service/noticias'; // base para imagens
const containerNoticias = document.querySelector('.lista-noticias');

async function carregar() {
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('API não carregada ou não conectada');

        const dados = await resp.json();
        containerNoticias.innerHTML = '';

        dados.forEach(noticia => {
            // Corrige o caminho da imagem, removendo a primeira barra se necessário
            const caminhoImagem = noticia.imagem.startsWith('/')
                ? `${baseImagem}${noticia.imagem}`
                : noticia.imagem;

            const html = `
                <div class="noticia">
                    <img src="${caminhoImagem}" alt="Imagem da notícia" class="imagem-noticia">
                    <div class="conteudo-noticia">
                        <h2 class="titulo-noticia">${noticia.titulo}</h2>
                        <p class="texto-noticia">${noticia.descricao.substring(0, 150)}...</p>
                        <div class="rodape">
                            <p class="data-noticia">📅 ${noticia.data}</p>
                            <a href="noticia.html?id=${noticia.id}" class="ler-mais">ler mais</a>
                        </div>
                    </div>
                </div>
            `;
            containerNoticias.insertAdjacentHTML('beforeend', html);
        });

    } catch (erro) {
        console.error('Erro ao carregar notícias:', erro.message);
        containerNoticias.innerHTML = `
            <div class="erro">
                <p>❌ Não foi possível carregar as notícias no momento. Tente novamente mais tarde.</p>
            </div>
        `;
    }
}

carregar();
