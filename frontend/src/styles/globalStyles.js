import { makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles((theme)=> ({
    //BOTÕES
    buttonGrid:{
        marginTop: theme.spacing(3)
    },

    textButton:{
        fontWeight: '600'
    }

}))

export default useGlobalStyles;