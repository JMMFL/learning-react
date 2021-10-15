import { useLayoutEffect, useState } from "react";

function useWindowSize() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    function resize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, [])

    return [width, height];
}

export default useWindowSize;