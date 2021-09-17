import React from "react";
import StarRating from "./StarRating";
import { useColors } from "./color-hooks";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    let navigate = useNavigate();

    return (
        <section className="color" onClick={() => navigate(`/${id}`)}>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </section>
    )
}