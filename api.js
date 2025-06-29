const url = '/dados.json';
const containerNoticias = document.querySelector('.lista-noticias');

async function carregar() {
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('API não carregada ou não conectada');

        const dados = await resp.json();
        containerNoticias.innerHTML = '';

        dados.forEach(noticia => {
            const html = `
                <div class="noticia">
                    <img src="${noticia.imagem}" alt="Imagem da notícia" class="imagem-noticia">
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
