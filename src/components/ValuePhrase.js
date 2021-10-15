import React, { useEffect, useState } from "react";

function ValuePhrase() {
    const [value, setValue] = useState("");
    const [phrase, setPhrase] = useState("Example phrase");

    useEffect(() => {
        console.log(`Saved phrase: ${phrase}`)
    }, [phrase]);

    useEffect(() => {
        console.log(`Typing: ${value}`);
    }, [value]);


    const submit = () => {
        setPhrase(value);
        setValue("");
    }

    return (
        <>
            <label id="text" htmlFor="text">Type a Phrase</label>
            <input id="text" name="text" type="text" placeholder={phrase} onChange={event => setValue(event.target.value)} />
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default ValuePhrase;