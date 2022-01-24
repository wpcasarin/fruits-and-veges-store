import { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import ProductsHeader from '../components/ProductsHeader';
import Item from '../components/Item';
import GlobalContext from '../context/GlobalContext';
import Alert from '../components/Alert';

function ProductsPage() {
  const { itemsData, fetchSuccess } = useContext(GlobalContext);

  return (
    <>
      {fetchSuccess || <Alert />}
      <Header currentPage={1} />
      <Container>
        <ProductsHeader />
        <Grid container spacing={2}>
          {itemsData.map((item, index) => (
            <Grid key={index} item xs={6} md={4}>
              <Item
                name={item.name}
                genus={item.genus}
                family={item.family}
                order={item.order}
                nutritions={item.nutritions}
                itemId={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ProductsPage;
