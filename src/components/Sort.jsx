import React, {useContext} from 'react';
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

  const MenuProps = {
    PaperProps: {
        style: {
        width: 100,
        },
    },
  };
    


const Sort = () => {

        const [[pokemons,setPokemons],[table, setTable]] =  useContext(AppContext);
        const [type, setType] = React.useState('');
        const classes = useStyles();
    
        const sorting = (e) => {
           setPokemons(pokemons);
           searchPokemon(e.target.value);
           setType(e.target.value)
           
        }

        const tableSortAz = (index) => {
            const  copy = [...pokemons];
            const result = copy.sort((a,b) => 
                        a.stats[index].base_stat - b.stats[index].base_stat
                    )
           setPokemons(result)
        }
        const tableSortZa = (index) => {
            const  copy = [...pokemons];
            const result = copy.sort((a,b) => 
                        b.stats[index].base_stat - a.stats[index].base_stat
                    )
           setPokemons(result)
        }

        const searchPokemon = (value) => {
            if (value === 'name') {     
            }
            switch (value) {
                case 'attack-a': 
                    tableSortAz(1)
                    break;
                case 'attack-z': 
                    tableSortZa(1)
                    break;
                case 'defense-a': 
                    tableSortAz(2)
                    break;
                case 'defense-z': 
                    tableSortZa(2)
                    break;
                case 'speed-a': 
                    tableSortAz(5)
                    break;
                case 'speed-z': 
                    tableSortZa(5)
                    break;
                case 'name': 
                    const copy = [...table];
                    const result = copy.sort((a,b) => 
                            a.name - b.name
                        )     
                    setPokemons(result)
                    break;   
                default:
                    setPokemons(table)
                    break;
            }
        }

  return (
    <FormControl className={classes.root} >
        <InputLabel variant='outlined' className={classes.label} id="demo-simple-select-autowidth-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={sorting}
          label="Type"  
          className={classes.select}
          MenuProps={MenuProps}  
        >
            <MenuItem  value='name'>None</MenuItem>
            <MenuItem  value='attack-a'>Attack(A-Z)</MenuItem>
            <MenuItem  value='attack-z'>Attack(Z-A)</MenuItem>
            <MenuItem  value='defense-a'>Defense(A-Z)</MenuItem>
            <MenuItem  value='defense-z'>Defense(Z-A)</MenuItem>
            <MenuItem  value='speed-a'>Speed(A-Z)</MenuItem>
            <MenuItem  value='speed-z'>Speed(Z-A)</MenuItem>
        </Select>
    </FormControl>
  )
}

export default Sort