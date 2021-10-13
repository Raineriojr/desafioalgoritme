import React, { useState } from 'react';
import { 
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
    const [renda, setRenda] = useState('');
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    const handleChangeTypeFilters = (event) => setTypeFilter(event.target.value)

    const handleChangeSelect = (event) => setRenda(event.target.value);

    const getInputField1 = (event) => setValor1(event.target.value)
    const getInputField2 = (event) => setValor2(event.target.value)
    
    React.useEffect(()=>{
        setFiltered(dataList)
    },[typeFilter])

    const Filter = () => {
        const data = [dataList][0];

        if(renda === 10 && valor1){
            const resp = data.filter((item)=>{
                if(item.renda == valor1){
                    return item;
                }
            })
            setFiltered(resp);

        } else if (renda === 20 && valor1 && valor2){
            const resp = data.filter((item)=>{
                if(item.renda >= valor1 && item.renda <= valor2){
                    return item;
                }
            })
            setFiltered(resp);
        } else if (typeFilter === 20){
            setFiltered(dataList);
        }
    }

    function RenderSelect(){
        if(typeFilter === 10){
            return(
                <FormControl className={classes.select} variant="standard" sx={{minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Selecione:</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={renda}
                    onChange={handleChangeSelect}
                    label="renda"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Valor Único</MenuItem>
                    <MenuItem value={20}>Entre Valores</MenuItem>
                </Select>
            </FormControl>
            )
        }
    }

    function RenderInput(){
        if(renda === 10){
            return(
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    id="valor1"
                    type="number"
                    label="Valor"
                    name="valor"
                    onChange={(value)=>getInputField1(value)}
                />
                
            )
        }
        if(renda === 20){
            return(
                <>
                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    id="valor1"
                    type="number"
                    label="Valor"
                    name="valor1"
                    onChange={(value)=>getInputField1(value)}
                />

                <TextField
                    className={classes.textField}
                    required
                    fullWidth
                    id="valor2"
                    type="number"
                    label="Valor"
                    name="valor2"
                    onChange={(value)=>getInputField2(value)}
                />
                </>
            )
        } if(renda === ''){
            return
        }
    }

    return (
        <div className={classes.flexFilters}>
            <FormControl className={classes.select} variant="standard" sx={{minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Filtrar por:</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={typeFilter}
                    onChange={handleChangeTypeFilters}
                    label="typeFilter"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={20}>Todos</MenuItem>
                    <MenuItem value={10}>Renda</MenuItem>
                </Select>
            </FormControl>

            {RenderSelect()}

            {RenderInput()}

            <FormControl className={classes.button}>
                <Button 
                    color="primary"
                    onClick={()=>Filter()}
                >
                    <Typography>Filtrar</Typography>
                </Button>
            </FormControl>
        </div>
    );
}