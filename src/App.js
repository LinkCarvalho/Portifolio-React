import React from 'react';
import { Container, AppBar, Toolbar, Typography, Grid, Card, CardContent, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

const App = () => {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#3C5575' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portifolio
          </Typography>
          <Link href="#about" style={{ color: '#000', textDecoration: 'none' }}>
            <IconButton sx={{ bgcolor: '#3C5575', marginRight: '10px', borderRadius: '0' }}>
              About
            </IconButton>
          </Link>
          <Link href="#projects" style={{ color: '#000', textDecoration: 'none' }}>
            <IconButton sx={{ bgcolor: '#3C5575', marginRight: '10px', borderRadius: '0' }}>
              Projects
            </IconButton>
          </Link>
          <Link href="#contact" style={{ color: '#000', textDecoration: 'none' }}>
            <IconButton sx={{ bgcolor: '#3C5575', borderRadius: '0' }}>
              Contacts
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '80px' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} id="about" textAlign="center" sx={{ marginBottom: '50px' }}>
            <Typography variant="h2" sx={{ marginTop: '20px', marginBottom: '10px' }}>
              My name is
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '6rem' }}>
              Filipe Carvalho
            </Typography>
            <Typography variant="h2" sx={{ marginBottom: '20px' }}>
              and I am a backend developer.
            </Typography>
          </Grid>

          <Grid item xs={12} id="projects" textAlign="center" sx={{ marginBottom: '50px' }}>
            <Typography variant="h2" sx={{ marginBottom: '20px' }}>
              These are some of my projects
            </Typography>
            <Link href="https://github.com/LinkCarvalho/Snakegame" target="_blank">
              <Card sx={{ maxWidth: '400px' }}>
                <img
                  src="https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2022/08/17124429/snake_coolmath.jpg"
                  alt="project"
                  style={{ width: '100%' }}
                />
                <CardContent>
                  <Typography variant="h4">Snake Game</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} id="contact" textAlign="center">
            <Typography variant="h2" sx={{ marginBottom: '20px' }}>
              These are my contacts
            </Typography>
            <IconButton href="https://www.facebook.com/profile.php?id=100054488482766" target="_blank" sx={{ color: '#fff', bgcolor: '#3C5575', marginRight: '10px', borderRadius: '0' }}>
              <FacebookIcon />
              Facebook
            </IconButton>
            <IconButton href="https://github.com/LinkCarvalho" target="_blank" sx={{ color: '#fff', bgcolor: '#3C5575', marginRight: '10px', borderRadius: '0' }}>
              <GitHubIcon />
              GitHub
            </IconButton>
            <IconButton href="mailto:fcf0133@gmail.com" sx={{ color: '#fff', bgcolor: '#3C5575', borderRadius: '0' }}>
              <MailIcon />
              Send email
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
