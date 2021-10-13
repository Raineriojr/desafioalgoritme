import React from 'react';
import {
    Box,
    Button,
    Container,
    CircularProgress,
    CssBaseline,
    Paper,
    TextField,
    Grid,
    Typography,
    
} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
//estilos
import useStyles from './style';
import useGlobalStyles from '../../styles/globalStyles';

import Header from '../../components/header';

export default function Users(){
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    const history = useHistory();

    //formulário e validação
    const { errors, isSubmitting, touched, setSubmitting, getFieldProps, handleSubmit, resetForm } = useFormik({
        initialValues: {
            nome: '',
            telefone: '',
            data_nascimento: '',
            renda: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string().required('Insira o nome do cliente'),
            telefone: Yup.string().required('Insira o telefone'),
            data_nascimento: Yup.string().required('Insira a data de nascimento'),
            renda: Yup.string().required('Insira a renda')
        }),
        onSubmit: async (values) => {
            setSubmitting(true)
            api.post('/cadastro_cliente', values).then((resp)=>{
                setSubmitting(false)
                if(resp.status === 200){
                    resetForm();
                    alert('Cadastrado com sucesso')
                }
            }).catch((error)=>{
                setSubmitting(false)
                alert('Erro ao cadastrar cliente')
                console.log(error);
            })
        }
    })

    function RenderContent(){
        return (
            <Container component="main" maxWidth="sm" >
    
                <CssBaseline />
    
                <Paper className={classes.paper}>
                <Box className={classes.box}>
    
                    <Typography variant="h4" className={classes.title}>Novo Cliente</Typography>
    
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nome"
                                    autoFocus
                                    error={touched.nome && errors.nome ? true : false}
                                    helperText={touched.nome && errors.nome}
                                    {...getFieldProps('nome')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="telefone"
                                    type="tel"
                                    label="Telefone"
                                    name="telefone"
                                    error={touched.telefone && errors.telefone ? true : false}
                                    helperText={touched.telefone && errors.telefone}
                                    {...getFieldProps('telefone')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField  
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    fullWidth
                                    name="nascimento"
                                    label="Data de nascimento"
                                    type="date"
                                    id="nascimento"
                                    error={touched.data_nascimento && errors.data_nascimento ? true : false}
                                    helperText={touched.data_nascimento && errors.data_nascimento}
                                    {...getFieldProps('data_nascimento')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="renda"
                                    label="Renda"
                                    type="number"
                                    id="renda"
                                    error={touched.renda && errors.renda ? true : false}
                                    helperText={touched.renda && errors.renda}
                                    {...getFieldProps('renda')}
                                />
                            </Grid>
                            <Grid item xs={12} className={globalClasses.buttonGrid}>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size='medium'
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                        }}
                                    />
                                    )}
                                    <Typography className={globalClasses.textButton}>CADASTRAR</Typography>
                                </Button>
                            </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                </Paper>
            </Container> 
        );
    }
    
    return(
        <>
            <Header content={RenderContent}/>
        </>
    )
}