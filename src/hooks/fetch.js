import React, {useEffect, useState} from 'react';

export const url = 'https://pokeapi.co/api/v2/pokemon';

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const fetching = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data)
               
            } catch (error) {
                console.error(error);
            };
           
        }    
        fetching(url); 
    }, [])
    
    return data;
}





/* export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetching = async () => {
            fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
            })
        }
        fetching();
     
    }, [])
    return {data}
    
} */