import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TModal } from '../../utils/types/customModal';
import styles from './styles';

const CustomModal = ({ setOpen, open, empleado }: TModal) => {

    const { nombre, apellido, letras } = empleado;

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles.box}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Nombre: { nombre } { apellido }
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    { letras && letras.map(({letra, cantidad}: any, index: number) => (
                        <button style={styles.button} key={index}>{letra}: {cantidad}</button>
                    ))}
                </Typography>
            </Box>
      </Modal>
    );
};

export default CustomModal;
