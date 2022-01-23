import { useContext } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GlobalContext from '../context/GlobalContext';

export default function Item({ name, genus, order, family }) {
  const { updateTotalItems } = useContext(GlobalContext);

  const LeftTitle = styled('p')(({ theme }) => ({
    color: 'black',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '500',
    margin: '0',
  }));
  const RightText = styled('span')(({ theme }) => ({
    color: theme.palette.primary.dark,
    fontFamily: theme.typography.fontFamily,
    fontWeight: '400',
  }));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/src/assets/card_img.jpg"
        alt="food"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <LeftTitle>
          Order: <RightText>{order}</RightText>
        </LeftTitle>
        <LeftTitle>
          Genus: <RightText>{genus}</RightText>
        </LeftTitle>
        <LeftTitle>
          Family: <RightText>{family}</RightText>
        </LeftTitle>
      </CardContent>
      <CardActions>
        <Button size="small">Info</Button>
        <Button
          onClick={() => {
            updateTotalItems();
          }}
          variant="contained"
          size="small"
          endIcon={<AddShoppingCartIcon />}
          disableElevation
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
