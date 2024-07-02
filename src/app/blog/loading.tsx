"use client";

import { useEffect } from "react";

export default function Loading() {
    useEffect(() => {
        window.alert("Blog Routing...");
    }, []);
    return <h1>Loading..............</h1>;
}
