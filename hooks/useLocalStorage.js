import { useEffect, useState } from "react";


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() =>{

        if(typeof localStorage !== "undefined"){

            const json = localStorage.getItem(key);
            if(json) return JSON.parse(json);
            if(typeof initialValue === "function") return initialValue();

            return initialValue;
        }
    });


    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
        console.log(value, key);
    }, [value, key]);

    return [value, setValue];
}