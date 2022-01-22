import { Container, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import Item from '../components/Item';

function ProductsPage() {
  return (
    <>
      <Header currentPage={1} />
      <Container>
        <Typography variant="h4" component="h2" sx={{ marginBlock: '2rem' }}>
          Fresh products for you and your family
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Item />
          </Grid>
          <Grid item xs={6} md={4}>
            <Item />
          </Grid>
          <Grid item xs={6} md={4}>
            <Item />
          </Grid>
          <Grid item xs={6} md={4}>
            <Item />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProductsPage;
