import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../App.css'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} >
                    <div className={classes.logo}>
                        <Typography variant="h3" style={{ padding: 15 }}>
                            Bank App
                        </Typography>
                    </div>
                </div>
                <Divider />
                <div className="sidebar mt-5">
                    <nav className="sidebar-nav">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/useraccounts">User Accounts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/transactions">Transactions</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Drawer>
        </div>
    );
}
