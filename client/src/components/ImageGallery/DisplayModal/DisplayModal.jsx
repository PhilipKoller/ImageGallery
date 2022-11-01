import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from './Image.jsx';
import ModalFooter from './ModalFooter.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ setSearchedImage, imageData, handleDelete }) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => { setSearchedImage() }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {imageData.name}
          </Typography>
          <Image imageData={imageData} />
          <ModalFooter imageData={imageData} handleDelete={handleDelete}/>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
