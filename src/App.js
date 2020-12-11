import React, {useState} from 'react';
import {
    MuiThemeProvider,
    createMuiTheme,
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'primary',
        height: '100vh'
    },
    test: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    accountButton: {
        margin: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
}));

function App() {
    const theme = createMuiTheme({
       palette: {
           primary: {
               main: '#fafafa',
               light: '#fbfbfb',
               dark: '#afafaf'
           },
           secondary: {
               main: '#212121',
               light: '#4d4d4d',
               dark: '#171717'
           }
       }
    });

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <div className={classes.test}>
                    <AppBar position="fixed" className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={clsx(classes.menuButton, open && classes.hide)} onClick={handleDrawerOpen} aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Website
                            </Typography>
                            <Button variant="outlined" className={classes.accountButton} startIcon={<MenuIcon/>}>
                                <AccountCircleIcon/>
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper}}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <main className={clsx(classes.content, {[classes.contentShift]: open})}>
                        <div className={classes.drawerHeader}/>
                        <Router>
                            <Switch>
                                <Route path='/' component={Home} />
                            </Switch>
                        </Router>
                    </main>
                </div>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
