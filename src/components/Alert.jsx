import { Typography } from '@mui/material';

function Alert() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        background: 'darkred',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
    >
      Fetch data failed, using backup data - API don't support CORS
    </Typography>
  );
}

export default Alert;
