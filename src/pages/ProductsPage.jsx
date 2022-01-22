import { Container } from '@mui/material';
import Header from '../components/Header';
import Item from '../components/Item';

function ProductsPage() {
  return (
    <>
      <Header currentPage={1} />
      <Container>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Container>
    </>
  );
}

export default ProductsPage;
