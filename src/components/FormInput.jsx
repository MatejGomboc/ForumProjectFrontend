import React, { useState } from "react";

function FormInput(props) {
    const [style] = useState(props.style);
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
        if (props.onChange) props.onChange(value);
    };

    return (
        <>
            <input
                id={props.name}
                type={props.type}
                name={props.name}
                onChange={handleChange}
                className={props.className}
                style={style}
                value={value}
            />
        </>
    );
}

export default FormInput;
