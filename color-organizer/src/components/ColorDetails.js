import React from "react"
import { useColors } from "./color-hooks";
import { useParams } from "react-router";

export function ColorDetails() {
    let { id } = useParams();
    let { colors } = useColors();

    let test = colors[0];
    console.log(test.id);
    let foundColor = colors.find(color => color.id === Number(id));

    return (
        <div>
            <div
            style={{
                backgroundColor: foundColor?.color,
                height: 100,
                width: 100
            }}>
                <h1>Details</h1>
            </div>
            <h1>{foundColor?.title}</h1>
            <h1>{foundColor?.color}</h1>
        </div>
    );
}