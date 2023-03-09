import './TextArea.css'

export const TextArea = (props) => {

    // const placeholderModified = '${props.placeholder}...'

    const OnTyping = (event) => {
        props.onChange(event.target.value)
    }
    return(
        <div className='text-area'>
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={OnTyping} required={props.required}/>
        </div>
    )
}