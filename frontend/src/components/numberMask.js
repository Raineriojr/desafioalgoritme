import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
            onChange({
                target: {
                name: props.name,
                value: values.value,
                },
            });
            }}
            thousandSeparator
            isNumericString
            prefix="R$"
        />
    );
});

NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function PhoneMask({ getFieldProps, touched, errors }) {
    const [values, setValues] = useState({
        textmask: '(00) 00000-0000',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <TextField
            required
            InputLabelProps={values != '' ? { shrink: true } : {shrink: false}}
            fullWidth
            label="Renda"
            value={values.numberformat}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{ inputComponent: NumberFormatCustom }}
            variant="standard"
            error={touched.renda && errors.renda ? true : false}
            helperText={touched.renda && errors.renda}
            {...getFieldProps('renda')}
        />
    );
}