import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Modal from './Modal.jsx';
import './Slack.css';

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
      <Stack spacing={{ xs: 2, md: 3 }}
        direction={{
          md:'column',
          lg:'row'
        }}>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}} className="item">
            <Modal keepMounted id="CSEC-102"/>
        </Item >
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}} className="item">
            <Modal keepMounted id="NSSA-220"/>
        </Item>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}} className="item">
            <Modal keepMounted id="ISTE-340" />
        </Item>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}} className="item">
            <Modal keepMounted id="NSSA-102"/>
        </Item>
        <Item sx={{backgroundColor:"rgb(45, 44, 44)"}} className="item">
            <Modal keepMounted id="ISTE-260"/>
        </Item>
      </Stack>
    </Box>
  );
}