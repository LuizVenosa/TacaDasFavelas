import Image from 'next/image';

export async function getStaticPaths() {

    const params = await fetch('http://localhost:1337/noticias')
        .then(res => res.json() || [])
        .then(noticias => noticias.map(noticia => noticia.Permalink))
        .then(permalinks => permalinks.map(permalink => ({ params: { permalink } })));

    console.log(JSON.stringify(params));

    return {
        paths: params,
        fallback: true
    };
}

export async function getStaticProps(context) {

    const { permalink } = context.params;

    const noticia = await fetch('http://localhost:1337/noticias')
        .then(res => res.json() || [])
        .then(noticias =>
            noticias
                .find(noticia => noticia.Permalink === permalink)
        )
    return { props: { noticia: noticia || null } }
}

const Noticia = ({ noticia }) => {
    if (!noticia) return <p>não encontrado</p>
    return (
        <div>
            <h1>{noticia.Titulo}</h1>
            <pre>{new Date(noticia.Data).toLocaleDateString('pt-BR')}</pre>
            <p>{noticia.Autor}</p>
            <Image
                src={'http://localhost:1337' + noticia.Imagem.url}
                alt="imagem da notícia"
                width={parseInt(noticia.Imagem.width)}
                height={parseInt(noticia.Imagem.height)}
            />
            <p>{noticia.Corpo}</p>
        </div>
    )
}

export default Noticia;