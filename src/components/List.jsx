import React, {useContext} from 'react';
import '../styles/list.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../context/Context';
import Info from './Info';
import FavoriteIconList from './FavoriteIconList';

const useStyles = makeStyles({
    root: {
      margin: 10,
    },
    media: {
      width: 250,
      height: 200
      
    },
    card: {
        width: 300,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 30,
    },
    content: {
      marginTop: 10,
    },
    div: {
      display: "flex",
      justifyContent:"space-between",
      padding: "0 10px"
    }
  });



const List = () => {
    const classes = useStyles();
    const [[pokemons]] = useContext(AppContext);
    
  
  return (
      <>
       { <div className='wrapper'>
          { pokemons &&
              pokemons.map( (pokemon) => {
                let src = pokemon.sprites.other.dream_world.front_default;
                let type = pokemon.types;
                let name = pokemon.name;
                let ability = pokemon.abilities;
                let stats = pokemon.stats;

                  return(
                  <Card className={classes.root} key= {pokemon.id} id ={pokemon.id}>
                    <CardActionArea className={classes.card}>
                      <img className={classes.media} src={src} alt="" />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {pokemon.name}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                          
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <div className={classes.div}>
                      <CardActions>
                        <Info src ={src} type ={[...type]} name ={name} abilities = {[...ability]} stats = { stats ?  [ ...stats] : []} />
                      </CardActions>
                      <FavoriteIconList pokemon = {pokemon}/>
                  </div>
                  </Card>
                  )
              })
          }
        </div>}
      </>
  )
}

export default List