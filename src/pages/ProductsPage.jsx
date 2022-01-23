import { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import Item from '../components/Item';
import GlobalContext from '../context/GlobalContext';

function ProductsPage() {
  const { itemsData } = useContext(GlobalContext);
  return (
    <>
      <Header currentPage={1} />
      <Container>
        <Typography variant="h4" component="h2" sx={{ marginBlock: '2rem' }}>
          Fresh products for you and your family
        </Typography>
        <Grid container spacing={2}>
          {itemsData.map((item) => (
            <Grid item xs={6} md={4}>
              <Item
                name={item.name}
                genus={item.genus}
                family={item.family}
                order={item.order}
                nutritions={item.nutritions}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ProductsPage;
