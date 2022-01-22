import { Container } from '@mui/material';
import Header from '../components/Header';

function HomePage() {
  return (
    <>
      <Header currentPage={0} />
      <Container>
        <h1>HOME</h1>
      </Container>
    </>
  );
}

export default HomePage;
