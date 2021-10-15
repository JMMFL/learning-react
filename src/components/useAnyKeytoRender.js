import { useState, useEffect } from "react";

function useAnyKeytoRender() {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, [])
}

export default useAnyKeytoRender;