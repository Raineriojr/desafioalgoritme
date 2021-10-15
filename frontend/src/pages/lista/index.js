import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Container,
    CssBaseline,
    ListItemIcon,
    Paper,
    Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../services/api';

//icones
import IconEdit from '@material-ui/icons/Edit';
//estilo
import useStyles from './style';
//componentes
import Header from '../index';
import Filtros from './filtros';

const columns = [ //colunas ta tabela
    { field: 'id', headerName: 'Nº', width: 80},
    { field: 'nome', headerName: 'Nome',width: 300},
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    { field: 'renda', headerName: 'Renda', width: 150 },
    { field: 'data_nascimento', headerName: 'Nascimento', width: 150 }
];

export default function UserList(){
    const classes = useStyles();

    //navegação
    const history = useHistory();
    const pageEdit = (data) => history.push({
        pathname: '/edit',
        state: {data: data}
    })

    const [ dataList, setDataList ] = useState([]); //recebe lista completa de clientes
    const [ filtered, setFiltered ] = useState([])
    const [ rowData, setRowData ] = useState([]); //recebe dados de linha selecionada
    

    useEffect(()=>{
        getDataList();
    },[dataList])

    function getDataList(){ //busca lista de clientes
        api.get('/lista_clientes').then((resp)=>{
            if(dataList.length !== resp.data.length){
                formatedData(resp.data)
            }
            setFiltered(dataList)
        }).catch((error)=>{
            console.log(error);
        })
    }

    function formatedData(props){ //formata dados vindos de getDataList() e seta em dataList
        const array = props;
        const data = array.map((element, index)=>{
            return {
                id: index+1,
                id_user: element.id,
                nome: element.nome,
                telefone: element.telefone,
                renda: element.renda,
                data_nascimento: String(element.data_nascimento).slice(0,10)
            }  
        })
        setDataList(data);
    }
    
    function clickIconEdit(){ //executado ao clicar no botão de editar cliente
        if(rowData == ''){
            alert('Selecione um cliente para editar')
        } else {
            pageEdit(rowData)
        }
    }

    function RenderContent(){ //conteúdo passado via props
        return(
            <Container component="main" maxWidth="lg" >

            <CssBaseline />

            <Paper className={classes.paper}>
            <Box className={classes.box}>
        
                <Typography variant="h4" className={classes.title}>Lista de Clientes</Typography>

                <Grid container className={classes.topListContainer}>
                    <Grid item >
                        <Filtros setFiltered={setFiltered} dataList={dataList} />
                    </Grid>
                    <Grid item >
                        <ListItemIcon onClick={()=> clickIconEdit()}>
                            <IconEdit/> 
                        </ListItemIcon>
                    </Grid>
                </Grid>
                <Grid container className={classes.dataGrid}>
                    <DataGrid
                        disableColumnMenu
                        hideFooterRowCount
                        hideFooterSelectedRowCount
                        rows={filtered}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        onRowClick={(data)=>setRowData(data.row)}
                    />
                </Grid>
                
            </Box>
            </Paper>
        </Container>
        )
    }

    return (
        <>
            <Header content={RenderContent}/>
        </>
    )
}


