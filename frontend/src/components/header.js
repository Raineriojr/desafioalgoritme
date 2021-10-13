import React, { useState } from "react";
import clsx from 'clsx';
import PropTypes from "prop-types";
import { useHistory, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';

//icones e estilos
import MenuIcon from "@material-ui/icons/Menu";
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import useStyles from "./style";

export default function Header(props) {

    //navegação
    const history = useHistory();
    const Logout = () => history.push('/')
    const pageList = () => history.push('/list');
    const pageCadastro = () => history.push('/cadastro');

    const { window } = props;
    const classes = useStyles();

    //estados
    const [ openDrawer, setOpenDrawer ] = useState(true);

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div className={classes.rootDrawer}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.rootAppBar}>
                <Toolbar>
                    <IconButton onClick={handleToggleDrawer} edge="start" className={classes.menuButtonAppBar} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Algoritme
                    </Typography>
                    <Button onClick={()=>Logout()} color="inherit">SAIR</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                container={container}
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={openDrawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>  </div>{/*mantem barra lateral abaixo do AppBAr*/}

                <List>
                    <ListItem button onClick={()=>pageCadastro()}>
                        <ListItemIcon> <PersonAddRoundedIcon /> </ListItemIcon>
                        <ListItemText primary="Novo Cliente" />
                    </ListItem>
                    <ListItem button onClick={()=>pageList()}>
                        <ListItemIcon> <FormatListBulletedRoundedIcon /> </ListItemIcon>
                        <ListItemText primary="Lista de Clientes" />
                    </ListItem>           
                </List>
            </Drawer>
        
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: openDrawer,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.content()}
            </main>
            
        </div>
  );
}
    Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
