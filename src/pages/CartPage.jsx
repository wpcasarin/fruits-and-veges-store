import { useContext } from 'react';
import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
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
    clearCart,
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
            endIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Header currentPage={3} />
      <Container>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBlock: '2rem' }}
        >
          <ShoppingBasketIcon fontSize="large" color="primary" />
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            sx={{ marginInlineStart: '10px' }}
          >
            Products
          </Typography>
          <Typography
            variant="h4"
            component="span"
            fontWeight="bold"
            sx={{
              marginInlineStart: 'auto',
            }}
          >
            total
          </Typography>
          <Button
            variant="outlined"
            color="error"
            endIcon={<DeleteOutlineIcon />}
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </Button>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={cartItems} columns={columns} />
        </div>
      </Container>
    </>
  );
}

export default CartPage;
