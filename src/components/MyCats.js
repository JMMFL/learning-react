import React, { useState } from "react"
import { PureCat } from "./Cat";

function Cats() {
    const [cats, setCats] = useState(["Annie", "Ahri", "Anivia"]);
    
    return (
        <>
            {cats.map((name, i) => <PureCat key={i} name={name} meow={name => console.log(name)} />)}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a Cat
            </button>
        </>
        
    );
}

export default Cats;