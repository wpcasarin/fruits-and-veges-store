import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function Item() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/src/assets/card_img.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {'Name'}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Genus:{' '}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Family:{' '}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Order:{' '}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Info</Button>
        <Button variant="contained" size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
