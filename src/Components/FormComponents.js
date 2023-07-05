const FormComponents = (props) => {
    return(
        <label>
                    {props.name}: <input type="text" name={props.name} onChange={props.fieldChangeHander}/>
                </label>
    )
}

export default FormComponents