import './DropDown.css'


export const DropDown = (props) => {
    return (
      <div className='drop-down'>
        <label> {props.label} </label>
        <select onChange={event =>props.onChange(event.target.value)} required={props.required} value={props.value}>
          <option value=""/>
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
      </div>
    )
}