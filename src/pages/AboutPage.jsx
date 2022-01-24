import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import AboutHeader from '../components/AboutHeader';

function AboutPage() {
  return (
    <>
      <Header currentPage={2} />
      <Container>
        <AboutHeader />
        <Typography
          component="div"
          sx={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10rem',
          }}
        >
          <h2
            style={{
              fontSize: '2.2rem',
              maxWidth: '440px',
              textAlign: 'center',
              lineHeight: '1.2',
              margin: '0',
            }}
          >
            We're on a mission to make your life{' '}
            <span style={{ color: '#7CAB21' }}>healthier</span>
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '500px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eveniet a error veniam tempora officiis blanditiis autem magni
            assumenda nisi modi iusto rerum id ad vero quidem, fugiat aliquid?
            Ex!
          </p>
        </Typography>
      </Container>
    </>
  );
}

export default AboutPage;
