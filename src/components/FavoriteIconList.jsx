import React, {useState, useContext} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { AppContext } from '../context/Context';

    

const FavoriteIconList = (props) => {
    const [favorite, setFavorite] = useState('');
    const [[pokemons,setPokemons],[table, setTable], [favorites, setFavorites]] = useContext(AppContext);

    const addFavorite = () => {
        if (favorite === '') {
            setFavorite('secondary');
            setFavorites(favorites => [...favorites, props.pokemon])
        } else {
            if(favorites.includes(props.pokemon)){
                const result = favorites.filter( value => value !== props.pokemon);
                setFavorites(result);
            }
            setFavorite('')
        }
    }

    if(favorite === '') {
        return(
            <CardActions onClick = {addFavorite} >
                <FavoriteBorderIcon color = 'secondary'/>
            </CardActions>     
        )

    } else {
        return (
            <CardActions onClick = {addFavorite} >
                 <FavoriteIcon color = {favorite} />    
            </CardActions>
          )
    }
 
}

export default FavoriteIconList;