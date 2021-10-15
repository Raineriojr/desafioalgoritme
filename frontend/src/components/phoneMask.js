import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { TextField } from '@material-ui/core';
  

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(00) 00000-0000"
            definitions={{
            '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
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
            label="Telefone"
            InputLabelProps={values != '' ? { shrink: true } : {shrink: false}}
            required
            value={values.textmask}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            InputProps={{ inputComponent: TextMaskCustom}}
            variant="standard"
            error={touched.telefone && errors.telefone ? true : false}
            helperText={touched.telefone && errors.telefone}
            {...getFieldProps('telefone')}
        />
    );
}