import React,{useContext} from 'react'
import { AppContext } from '../context/Context';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width:100,
      borderRadius: 20
    },
    label: {
        fontSize: 23,
        color: "#9da6d9",
        fontWeight: "bold",
        margin: "10 0"
    },
    select: {
      backgroundColor:'white',
      borderRadius: 20,
      width: 150
    }
  });




const Filter = () => {
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const arrTypes = ['all','grass','poison','fire','flying','water','normal', 'ground','electric', 'fairy', 'fighting','psychic','rock','steel','ice', 'ghost','dragon']
    const [[pokemons,setPokemons],[table, setTable]] =  useContext(AppContext);


    const filter = (e) => {
         filterPokemon(e.target.value);
         setType(e.target.value);
      }
  
    const MenuProps = {
      PaperProps: {
          style: {
          width: 100,
          },
      },
    };
      
      const filterPokemon  = (value) =>{
          if (value !== 'all') {
            const arr = []
            table.map((pokemon) => { 
                pokemon.types.map( type => {
                    if (type.type.name.toLowerCase() === value.toLowerCase()) {
                      arr.push(pokemon)
                    } 
                }) 
              });
         
             var searchResult = table.filter((pokemon) => {
                if(arr.includes(pokemon)) {  
                    return pokemon  
                }
             })
    
             setPokemons(searchResult); 
              
          } else {
              setPokemons(table)
          }         
      }
  return (
    <FormControl className={classes.root} >
        <InputLabel variant='outlined' className={classes.label} id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={filter}
          label="Type"  
          className={classes.select}
          MenuProps={MenuProps}  
        >
          {
              arrTypes.map(type => {
                  return (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                  )
              })
          }
        </Select>
    </FormControl>
  )
}

export default Filter
