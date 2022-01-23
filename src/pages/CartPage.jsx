import { useContext, useEffect } from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function CartPage() {
  const {
    itemQuantity,
    cartItems,
    addItemToCart,
    rmItemFromCart,
    deleteItemFromCart,
  } = useContext(GlobalContext);

  const columns = [
    { field: 'name', headerName: 'Product', width: 150 },
    {
      field: 'Quantity',
      width: 200,
      renderCell: (item) => {
        return (
          <ButtonGroup disableElevation variant="contained">
            <Button
              onClick={() => {
                addItemToCart(item.id);
              }}
            >
              <AddIcon />
            </Button>
            <Button>{`${itemQuantity(item.id)}`}</Button>
            <Button
              onClick={() => {
                rmItemFromCart(item.id);
              }}
            >
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        );
      },
    },
    {
      field: 'Delete Item',
      width: 150,
      renderCell: (item) => {
        return (
          <Button
            disableElevation
            variant="contained"
            color="error"
            onClick={() => {
              deleteItemFromCart(item.id);
            }}
          >
            Remove
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Header currentPage={3} />
      <Container>
        <div style={{ height: 800, width: '100%' }}>
          <DataGrid rows={cartItems} columns={columns} />
        </div>
      </Container>
    </>
  );
}

export default CartPage;
