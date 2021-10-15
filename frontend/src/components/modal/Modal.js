import React from 'react';
import { 
    Box,
    Button,
    Typography,
} from '@material-ui/core';

import Modal from '@material-ui/core/Modal'


export default function BasicModal({ setOpen, open }) {

    const handleClose = () => setOpen(false);
  
    return (
        <div>
        
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Erro
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Usuário ou Senha Incorretas. Tente Novamente!
                </Typography>
            </Box>
            
        </Modal>
        </div>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };