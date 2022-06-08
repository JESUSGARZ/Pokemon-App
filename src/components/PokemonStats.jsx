import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/stats.css'

const useStyles = makeStyles({
  head: {
      width: 150,
  }
});



 const PokemonStats = (props) => {
  const clases = useStyles()
  return (
    
        <TableContainer sx ={{width: 'fit-content'}} component={Paper}>
        <Table sx={{ width: 350 }} size="small" aria-label="a dense table">
        <TableHead className = {clases.head}>
            <TableRow>
              <TableCell>Stat</TableCell>
              <TableCell align="right"> # </TableCell>
            </TableRow>
          </TableHead> 
          <TableBody className = {clases.head}>
            {props.stats?.map((row) => (
              <TableRow
                key={row.stat.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: 'auto' }}
              >
                <TableCell className = {clases.head} component="th" scope="row">
                  {row.stat.name}
                </TableCell>
                <TableCell className = {clases.head} align="right">{row.base_stat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    
  );
}

export default PokemonStats;
