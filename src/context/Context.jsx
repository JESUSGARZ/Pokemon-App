import React,{createContext,useState, useEffect} from 'react';
export const AppContext = createContext();



const ContextProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([]);
    const [table, setTable] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const fecthing =  () => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`)
            .then(data => data.json())
            .then(resp => {
                for (let i = 0; i < resp.results.length; i++) {
                    fetch(resp.results[i].url)
                    .then(data => data.json())
                    .then( result => {
                        setPokemons(prevArray => [...prevArray, result])
                        setTable(prevArray => [...prevArray, result])
                    })
                }
            })  
    }

        useEffect( () => { 
            fecthing()
        }, [])
  return (
      <AppContext.Provider value={[[pokemons,setPokemons],[table, setTable], [favorites, setFavorites]]}>
          {children}
      </AppContext.Provider>
    
  )
}

export default ContextProvider;