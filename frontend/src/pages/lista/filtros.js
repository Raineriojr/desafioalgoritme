import React, { useState, useEffect } from 'react';
import { 
    Box,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Typography,
    TextField
} from '@material-ui/core';
//estilo
import useStyles from './style';

export default function Filtros({ dataList, setFiltered }) {
    const classes = useStyles();

    const [typeFilter, setTypeFilter] = useState(20);
    const [selectRenda, setSelectRenda] = useState('');
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    const [ visibleSelect, setVisibleSelect ] = useState(false);
    const [ visibleInput1, setVisibleInput1 ] = useState(false);
    const [ visibleInput2, setVisibleInput2 ] = useState(false);

    const getInputField1 = (event) => setValor1(event.target.value) //pega valor de campo 1
    const getInputField2 = (event) => setValor2(event.target.value) //pega valor de campo 1

    const handleChangeTypeFilters = (event) => {
        setTypeFilter(event.target.value)// verifica valor do select e renderiza "SELECT" da opção de select1
        if(event.target.value === 10){
            setVisibleSelect(true)
        } else {
            setVisibleSelect(false)
            setVisibleInput1(false)
            setVisibleInput2(false)
            ResetFields()
        }
    }
    const handleChangeSelect = (event) => { //  verifica valor do select e renderiza "INPUT" da opção selecionada
        setSelectRenda(event.target.value)
        if(event.target.value === 10){
            setVisibleInput1(true);
            setVisibleInput2(false)
            ResetFields()
        } else if(event.target.value === 20){
            setVisibleInput1(true)
            setVisibleInput2(true)
            ResetFields()
        } else {
            setVisibleInput1(false)
            setVisibleInput2(false)
         }
    }

    const ResetFields = () => {
        setValor1('')
        setValor2('')
    }

    const Filter = () => {      //filtros
        const data = [dataList][0];

        if(selectRenda === 10 && valor1){ //filtra valor unico
            const resp = data.filter((item)=>{
                if(item.renda == valor1){
                    return item;
                }
            })
            setFiltered(resp);

        } else if (selectRenda === 20 && valor1 && valor2){ //filtra intervalo de valores
            const resp = data.filter((item)=>{
                if(item.renda >= valor1 && item.renda <= valor2){
                    return item;
                }
            })
            setFiltered(resp);
        } else if (typeFilter === 20){ //filtra todos
            return setFiltered(dataList);
        }
    }

    return (
        <Box className={classes.topListContainer}>
            <FormControl className={classes.select} variant="standard" sx={{minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Filtrar por:</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={typeFilter}
                    label="typeFilter"
                    onChange={handleChangeTypeFilters}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={20}>Todos</MenuItem>
                    <MenuItem value={10}>Renda</MenuItem>
                </Select>
            </FormControl>

            {visibleSelect &&
            <FormControl className={classes.select} variant="standard" sx={{minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Selecione:</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectRenda}
                    onChange={handleChangeSelect}
                    label="renda"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Valor Único</MenuItem>
                    <MenuItem value={20}>Entre Valores</MenuItem>
                </Select>
            </FormControl>}

            {visibleInput1 && 
                <TextField
                className={classes.textField}
                required
                fullWidth
                id="valor1"
                type="number"
                label="Valor"
                name="valor1"
                onChange={(value)=>getInputField1(value)}
            />}

            {visibleInput2 &&
            <TextField
                className={classes.textField}
                required
                fullWidth
                id="valor2"
                type="number"
                label="Valor"
                name="valor2"
                onChange={(value)=>getInputField2(value)}
            />}

            <FormControl className={classes.button}>
                <Button 
                    color="primary"
                    onClick={()=>Filter()}
                >
                    <Typography>Filtrar</Typography>
                </Button>
            </FormControl>
        </Box>
        );
}

    

    
  
    
    