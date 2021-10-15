import React, { useCallback, useEffect, useMemo } from "react";
import useAnyKeytoRender from "./useAnyKeytoRender";

function FreshRender({children = ""}) {
    useAnyKeytoRender();

    const words = useMemo(() => children.split(" "), [children]);
    const fn = useCallback(() => {
        console.log("Hello");
        console.log("World");
    }, [])

    useEffect(() => {
        console.log("fresh render");
        fn();
    }, [words, fn]);

    return (
        <>
            <p>{children}</p>
            <p><b>{words.length}</b> - words</p>
        </>
    )
}

export default FreshRender