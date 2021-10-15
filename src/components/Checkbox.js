import React from "react";
import { useEffect, useReducer } from "react";

function Checkbox() {
    const [checked, setChecked] = useReducer(checked => !checked, false);
    const status = checked ? "checked" : "unchecked";

    useEffect(() => {
        alert(`Checkbox is ${status}.`);
    }, [status])

    return (
        <>
            <input id="checkbox" type="checkbox" value={checked} onChange={setChecked} />
            <label htmlFor="checkbox" id="checkbox">{status}</label>
        </>
    )
}

export default Checkbox;

