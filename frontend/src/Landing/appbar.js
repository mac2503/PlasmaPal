import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import image from '../img/logo512.png'
import {Link, Router} from 'react-router-dom'; 
import './landing.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            <Link to="/" id="landbtn">PlasmaPal</Link>
          </Typography>
          <Button color="inherit" ><Link id="landbtn" to="/signin">Login/ Signup</Link></Button>
          <Button color="inherit" >Chat</Button>
          <Button color="inherit" ><Link id="landbtn" to="/bookslot">Book Slots</Link></Button>
          <Button color="inherit" >Request Plasma</Button>
          <Button color="inherit" ><Link id="landbtn" to="/eligibility">Eligibility</Link></Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
