import { useContext, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const columns = [
  { field: 'id', headerName: 'Name', width: 150 },
  { field: 'count', headerName: 'Count', width: 150 },
  {
    field: 'Add',
    renderCell: (item) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            console.log(item);
          }}
        >
          Add
        </Button>
      );
    },
  },
];

function CartPage() {
  const { cartItems, countedCartItems } = useContext(GlobalContext);

  return (
    <>
      <Header currentPage={3} />
      <Container>
        <div style={{ height: 800, width: '100%' }}>
          <DataGrid rows={countedCartItems} columns={columns} />
        </div>
      </Container>
    </>
  );
}

export default CartPage;
