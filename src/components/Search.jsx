
import React,{ useContext, useState} from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AppContext } from '../context/Context';
import { makeStyles } from '@material-ui/core/styles';
import Filter from './Filter';
import Sort from './Sort';
import FavoriteCount from './FavoriteCount';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between ',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 6),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    justifySelf:'flex-end',
    [theme.breakpoints.up('sm')]: {
      width: '24ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
}));

const useStyles = makeStyles({
    filter: {
      height:100,
      width:600,
      display: "flex",
      justifyContent:"space-evenly",
      alignItems:"center",
      marginLeft:200,
      paddingBottom:10
    },
    search: {
      display:"flex",
      justifyContent:"space-evenly"
    },
    toolbar: {
      display:"flex",
      justifyContent:"space-evenly"
    },
    icon: {
      display:"flex",
      justifyContent:"flex-start",
      alignItems: "center"
    }
  });

export default function SearchAppBar() {
    const classes = useStyles();
    const [[pokemons,setPokemons],[table, setTable]] =  useContext(AppContext);
    const [value, setValue] = useState('')

    const filter = (e) => {
      setValue(e.target.value)
       searchPokemon(e.target.value)
    }
    
    const searchPokemon  = (value) =>{
   
       var searchResult = table.filter((pokemon) => {
         if (pokemon.name.toString().toLowerCase().includes(value.toLowerCase())) {
           return pokemon 
         }
       });
       setPokemons(searchResult);    
    }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar className={classes.search} position="fixed">
        <Toolbar className={classes.toolbar} > 
          <div className={classes.icon}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              >
                  <MenuIcon />
              </IconButton>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                  Pokemon App
              </Typography>
            
              <Search>
                  <SearchIconWrapper>
                  <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value ={value}
                    onChange = {filter}
                  />
              </Search>
          </div>
          <div className={classes.filter}>
              <Sort/>
              <Filter/>
              <FavoriteCount/>
          </div>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
