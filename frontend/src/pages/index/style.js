import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({

    //ESTILO DA BARRA SUPERIOR
    rootAppBar: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
    },
    menuButtonAppBar: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  

  //ESTILO DA BARRA LATERAL
    rootDrawer: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('xs')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 0
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
    },

    subItem: {
        paddingLeft: theme.spacing(3),
      },
}));

export default useStyles;
