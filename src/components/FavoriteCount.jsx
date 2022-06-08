import React, {useContext, useState, useEffect} from 'react';
import Badge from '@material-ui/core/Badge';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AppContext } from '../context/Context';
import FavoriteList from './FavoriteList';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const FavoriteCount = () => {
    const [[pokemons,setPokemons],[table, setTable], [favorites, setFavorites]] = useContext(AppContext);
    const [count, setCount] = useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setCount(favorites.length)
    }, [favorites])

    return (
        <div>
            <div onClick={handleOpen}>
                <Stack  spacing={4} direction="row" sx={{ color: 'action.active' }}>
                    <Badge  overlap="rectangular" color='secondary'  badgeContent={count}>
                        <FavoriteBorderIcon   />
                    </Badge>
                </Stack>
            </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <FavoriteList />
            </Box>
          </Modal>
        </div>
      );
}

export default FavoriteCount;

