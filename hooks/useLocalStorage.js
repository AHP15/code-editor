import { useEffect, useState } from "react";


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState("");

    useEffect(() =>{
        const json = localStorage.getItem(key);

        if(json) setValue(JSON.parse(json));
        else if(typeof initialValue === "function") setValue(initialValue());
        else setValue(initialValue);

    },[]);

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}