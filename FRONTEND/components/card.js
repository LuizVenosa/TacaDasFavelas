const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt='imagem' />
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card;