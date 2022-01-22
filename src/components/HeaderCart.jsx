import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HeaderCart() {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
