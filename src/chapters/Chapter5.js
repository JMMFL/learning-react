import React from "react";
import Menu from "../components/Menu"
import data from "../data/recipes.json";

function Chapter5() {
    return <Menu recipes={data} />
}

export default Chapter5;
