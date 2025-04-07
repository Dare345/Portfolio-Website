import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Modal from './Modal.jsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} direction="row">
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}}>
            <Modal keepMounted id="CSEC-102"/>
        </Item >
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}}>
            <Modal keepMounted id="NSSA-220"/>
        </Item>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}}>
            <Modal keepMounted id="ISTE-340"/>
        </Item>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}}>
            <Modal keepMounted id="NSSA-102"/>
        </Item>
      </Stack>
    </Box>
  );
}