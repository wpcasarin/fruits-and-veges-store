import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GlobalContext from '../context/GlobalContext';

function CartHeader() {
  const { clearCart, totalQuantity } = useContext(GlobalContext);
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBlock: '2rem' }}>
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
        variant="h6"
        component="span"
        fontWeight="medium"
        sx={{
          marginInlineStart: 'auto',
          marginInlineEnd: '2rem',
        }}
      >
        Total products:
        <span
          style={{
            marginInlineStart: '10px',
            color: '#7CAB21',
            fontWeight: 'bold',
          }}
        >
          {totalQuantity}
        </span>
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
  );
}

export default CartHeader;
