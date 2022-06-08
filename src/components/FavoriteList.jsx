import React,{useContext} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { AppContext } from '../context/Context';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    img: {
      width:150,
      marginRight: 20
    }
  });
  
  export default function ChildModal() {
    const classes = useStyles();
    const [[pokemons,setPokemons],[table, setTable], [favorites, setFavorites]] = useContext(AppContext);
  
    return (
      <React.Fragment>
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
            >
                {favorites.map((item) => (
                    <ListItem key={item.id}>
                        <img className={classes.img}  src={item.sprites.other.dream_world.front_default} alt="pokemon" />
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}  
        </List>
      </React.Fragment>
    );
  }
