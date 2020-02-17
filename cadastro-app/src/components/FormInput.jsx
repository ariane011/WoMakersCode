import React from 'react';

  function FormInput(props) {
    const {
        label,
        placeholder,
        inputType,
        value,
        handleChange,
        name
    } = props;
        const handleChange = (event) => {
            handleChange(event.target.name, event.target.value)
        }
        return <div>
            <label>{label}</label>
            <input name={name} value={value} placeholder={placeholder} inputType={inputType} value={value}/>
        </div>
}



export default FormInput