
import './Players.css'

export const Player = ({name, image, roles}) => {

    return(
        <div className='player'>
            <div className='cabecalho'>
                <img className='img' src={image} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{roles}</h5>
                <button>Remover</button>
            </div>
        </div>
    )
}