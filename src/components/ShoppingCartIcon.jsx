import { useContext } from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GlobalContext from '../context/GlobalContext';
function HeaderCart() {
  const { totalItems } = useContext(GlobalContext);
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default HeaderCart;
