import React from "react";
import useWindowSize from "./useWindowSize";

function WindowSize() {
    const [width, height] = useWindowSize();
    const halfHeight = height / 2;
    const halfWidth = width / 2;
    const thirdWidth = width / 3;

    return (
        <>
        <div style={{width: width, height: halfHeight, background: "blue"}}></div>
        <div style={{width: halfWidth, height: halfHeight, background: "red"}}></div>
        <div style={{width: thirdWidth, height: halfHeight, background: "green"}}></div>
        </>
    )
}

export default WindowSize;