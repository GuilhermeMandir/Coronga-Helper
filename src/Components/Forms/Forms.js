import './Forms.css'
import TextArea from '../TextArea';
import { DropDown } from '../DropDown/DropDown';
import { useState } from 'react';
import Button from '../Button';

export const Forms = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.onPlayerRegister({
            name,
            role,
            image
        })
    }

    return(
       <section className='forms'>
        <form onSubmit={onSave}>
            <h2>CADASTRAR JOGADOR</h2>
            <TextArea
                required={true}
                label = "Nome"
                value = {name}
                onChange = {value=>setName(value)}
            />
            <DropDown
                label = "Time"
                itens={props.roles}
                value = {role}
                onChange = {value=>setRole(value)}
            />
            <TextArea
                required={true}
                label = "Imagem"
                value = {image}
                onChange = {value=>setImage(value)}
            />
            <Button text ="Adicionar jogador"/>
        </form>
       </section> 
    )
}