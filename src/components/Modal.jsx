import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState,useEffect} from 'react';
import getData from '../utils/getData';
import Load from './Loading.jsx'

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //state
    const [loaded, setLoaded] = useState(false);
    const [obj, setObj] = useState();
  //useEffect
    useEffect(() => {
      getData(props.id)
      .then( (json) =>{
        setObj(json);
        setLoaded(true);
      })
    },[]);
    
      if (!loaded) {
      return(<Load/>)
      }
        let title = obj.title;
      if ((title).includes('&amp;')){
        title = title.replace('&amp;','&');
      }
  return (
    <div>
      <Button onClick={handleOpen} sx={{color:'white'}}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {obj.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}