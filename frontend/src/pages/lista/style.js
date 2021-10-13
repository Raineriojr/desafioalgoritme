import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box:{
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    paper:{
        padding: theme.spacing(5)
    },

    title:{
        marginBottom: theme.spacing(4)
    },

    topListContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        height: theme.spacing(3),
        width: '100%',
        marginBottom: theme.spacing(1)
    },

    flexFilters:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },

    dataGrid:{
        height: theme.spacing(50), 
        width: '100%'
    },

    

    //estilo dos filtros
    select:{
        width: theme.spacing(15),
        margin: theme.spacing(1)
    },

    button:{
        marginTop: theme.spacing(3)
    },

    textField:{
        margin: theme.spacing(1),
        width: theme.spacing(15)
    }


}))

export default useStyles;