import React from "react";
import IngredientsList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCaste().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}