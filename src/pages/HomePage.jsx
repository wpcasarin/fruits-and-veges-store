import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../components/Header';

function HomePage() {
  return (
    <>
      <Header currentPage={0} />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="primary"
          sx={{ fontWeight: 'bold', marginTop: '10rem' }}
        >
          Healthy and Fresh Food
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 'bold', lineHeight: '2' }}
        >
          For you and your family
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="primary.dark"
          sx={{ lineHeight: '2' }}
        >
          The best fruits and veges, a few clicks away
        </Typography>
        <Box sx={{ marginTop: '3rem' }}>
          <Button
            component={NavLink}
            variant="contained"
            size="large"
            sx={{
              width: '300px',
              height: '50px',
              fontSize: '1.5rem',
            }}
            to="/products"
            endIcon={<ArrowForwardIcon />}
          >
            Explore
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
