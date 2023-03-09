import { Player } from '../Player/Player'
import './Roles.css'

export const roles = (props) => {

    return(
        <section className='roles'>
            <h3>{props.name}</h3>
            <div className='players'>
                {props.players.map(player => <Player name = {player.name} roles = {player.roles} image = {player.image} />)}
            </div>
        </section>
    )
}