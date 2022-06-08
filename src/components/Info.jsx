
import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { StylesProvider } from '@material-ui/core/styles';
import PokemonStats from './PokemonStats';
import '../styles/info.css'


 const  Info = (props) => {
   
   const [state, setState] = React.useState({ bottom: false});
   const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width:  420, marginLeft: 30, display: 'block', top: 'auto', left:'40%'  }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className='info__container'>
          <div >
              <h1>{props.name}</h1>
            <Divider />
            <List>
              <div className='info__type'>
                <div>
                  <h3>Pokemon Type</h3>
                  { props.type?.map((e, index) => {
                      return (
                      <ListItem key={index} disablepadding = 'true'>
                        <ListItemButton>
                          <ListItemIcon>
                            <InboxIcon /> 
                          </ListItemIcon>
                          <ListItemText primary={e.type.name} />
                        </ListItemButton>
                      </ListItem>
                      )
                    }) 
                  }
                </div>
                <img className='info__img' src={props.src} alt="pokemon"  />
              </div>
              <h3>Abilities</h3>
              <Divider />
              {
                props.abilities?.map((ability, index) => {
                  return (
                    <ListItem key={index} disablepadding = 'true'>
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon /> 
                      </ListItemIcon>
                      <ListItemText primary={ability.ability.name} />
                    </ListItemButton>
                  </ListItem>
                  )
                })
              } 
            </List>
            <List>
              <PokemonStats stats = {props.stats}  />
            </List>
          </div>
        </div>
      </Box>
    </>
     
  );

  return (
  <StylesProvider injectFirst>
    <Button onClick={toggleDrawer('bottom', true)} size="small" color="primary">Info</Button>
      <Drawer
              anchor={'bottom'}
              open={state.bottom}
              onClose={toggleDrawer('bottom', false)}
      >
              {list('bottom')}
      </Drawer>  
  </StylesProvider>

  );
}

export default Info;