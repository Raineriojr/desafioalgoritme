import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    box:{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    paper:{
        padding: theme.spacing(5)
    },

    title:{
        marginBottom: theme.spacing(5)
    }

}))

export default useStyles;