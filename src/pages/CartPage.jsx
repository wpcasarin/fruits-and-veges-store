import { useContext, useEffect } from 'react';
import { Button, ButtonGroup, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function CartPage() {
  const { cartItems, addItemToCart, rmItemFromCart } =
    useContext(GlobalContext);

  const columns = [
    { field: 'name', headerName: 'Product', width: 150 },
    { field: 'count', headerName: 'Quantity', width: 150 },
    {
      field: 'Add Item',
      width: 150,
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
      field: 'Remove Item',
      width: 150,
      renderCell: (item) => {
        return (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              rmItemFromCart(item.id);
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
      <Button
        onClick={() => {
          console.log();
        }}
      >
        CLIQUEEEE
      </Button>
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
