import { Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function CartHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBlock: '2rem' }}>
      <InfoIcon fontSize="large" color="primary" />
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        sx={{ marginInlineStart: '10px' }}
      >
        About Us
      </Typography>
    </div>
  );
}

export default CartHeader;
