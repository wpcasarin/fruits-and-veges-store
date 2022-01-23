import { useContext, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Popover,
} from '@mui/material';
import { styled } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GlobalContext from '../context/GlobalContext';

export default function Item({
  name,
  genus,
  order,
  family,
  nutritions,
  itemId,
}) {
  const { addTotalItems, addItemToCart } = useContext(GlobalContext);

  // Card components
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

  // Popover stuff
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

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
        <div>
          <Button aria-describedby={id} size="small" onClick={handleClick}>
            Info
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box
              sx={{
                padding: '1rem',
              }}
            >
              <Typography
                variant="h6"
                component="h4"
                color="primary"
                sx={{ fontWeight: 'bold' }}
              >
                {name}
              </Typography>
              <LeftTitle>
                Fat: <RightText>{nutritions.fat}</RightText>
              </LeftTitle>
              <LeftTitle>
                Sugar: <RightText>{nutritions.sugar}</RightText>
              </LeftTitle>
              <LeftTitle>
                Protein: <RightText>{nutritions.protein}</RightText>
              </LeftTitle>
              <LeftTitle>
                Calories: <RightText>{nutritions.calories}</RightText>
              </LeftTitle>
              <LeftTitle>
                Carbohydrates: <RightText>{nutritions.carbohydrates}</RightText>
              </LeftTitle>
            </Box>
          </Popover>
        </div>
        <Button
          onClick={() => {
            addTotalItems();
            addItemToCart(itemId);
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
