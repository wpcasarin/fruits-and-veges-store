import { useContext, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Modal,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import CartHeader from '../components/CartHeader';
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    clearCart();
  };
  const handleClose = () => setOpen(false);

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
                rmItemFromCart(item.id);
              }}
            >
              <RemoveIcon />
            </Button>

            <Button>{`${itemQuantity(item.id)}`}</Button>
            <Button
              onClick={() => {
                addItemToCart(item.id);
              }}
            >
              <AddIcon />
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
        <CartHeader />
        <div style={{ height: 650, width: '100%' }}>
          <DataGrid rows={cartItems} columns={columns} />
        </div>
        {cartItems.length ? (
          <Button
            onClick={handleOpen}
            size="large"
            variant="contained"
            endIcon={<CheckIcon />}
            sx={{
              marginTop: '2rem',
            }}
          >
            Purchase
          </Button>
        ) : (
          <Button
            onClick={handleOpen}
            size="large"
            variant="contained"
            endIcon={<CheckIcon />}
            sx={{
              marginTop: '2rem',
            }}
            disabled
          >
            Purchase
          </Button>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'white',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Congratulations
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your products are on the way.
            </Typography>
          </Box>
        </Modal>
      </Container>
    </>
  );
}

export default CartPage;
