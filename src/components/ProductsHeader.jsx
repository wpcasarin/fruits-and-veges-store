import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import GlobalContext from '../context/GlobalContext';

function CartHeader() {
  const { clearCart, totalQuantity } = useContext(GlobalContext);
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBlock: '2rem' }}>
      <StoreIcon fontSize="large" color="primary" />
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        sx={{ marginInlineStart: '10px' }}
      >
        Our Store
      </Typography>
    </div>
  );
}

export default CartHeader;
