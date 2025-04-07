import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router';
import './Grid.css';

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

export default function AutoGrid(props) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4} sx={{justifyContent: "center", 
        alignItems: "center"}}>
          <Grid size={5}>
            <Item className="item" sx={{backgroundColor:"rgb(32, 32, 32)"}}>
                <Link to="https://people.rit.edu/dy4385/340/viteReact/  ">
                    <img src={props.images.web1} alt="web1"/>
                </Link>
                <p>
                    A Ischool Website I built for my client programming class in Fall 2024.
                    This project uses React components to structure and design a website that
                    provide important information on the undergraduate and graduate degrees at 
                    Golisano College of Computing and Information Sciences. It makes use of various
                    hooks like use effect and state to take information from an API reference. This
                    reference includes root nodes where I pull information from to display on my
                    website.
                </p>
            </Item>
          </Grid>

          <Grid size={5}>
            <Item className="item" sx={{backgroundColor:"rgb(32, 32, 32)"}}>
                <Link to="https://people.rit.edu/dy4385/ISTE240/project1/index.html  ">
                    <img src={props.images.web2} alt="web2"/>
                </Link>
                <p>
                    A Tourist Website I built using HTML, CSS, JavaScript, and PHP in Summer of 2024. The website
                    itself is based off my hometown back in Rhode Island listing the various
                    attractions and beaches that tourists may be interested in. There is also a
                    comments page which uses a database to record any comments people may have.
                    Unfortunately, the website provided by the link doesn't have this page currently
                    because of the database I used is not accessible to people outside of RIT. 
                
                </p>
            </Item>
          </Grid>
      </Grid>
    </Box>
  );
}
