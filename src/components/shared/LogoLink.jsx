import { NavLink } from 'react-router-dom';
import { Typography, Box, SvgIcon } from '@mui/material';

function Logo() {
  return (
    <Box display="flex" sx={{ textDecoration: 'none', flexGrow: 1 }}>
      <NavLink to="/">
        <SvgIcon color="primary" viewBox=" 0 0 24 24">
          <path d="M23.7022 3.14218C21.1035 1.17494 17.1032 0 13.0009 0C7.92813 0 3.79422 1.76916 1.66117 4.85432C0.659236 6.30236 0.104943 8.01901 0.0133122 9.95323C-0.0678038 11.6759 0.222111 13.5816 0.874043 15.6314C3.10023 8.96286 9.31912 3.7424 16.4889 3.7424C16.4889 3.7424 9.78028 5.50556 5.56225 10.9691C4.5998 12.208 3.82725 13.5831 3.26997 15.0491C2.07868 17.8832 1.46584 20.9263 1.46739 24H4.47169C4.47169 24 4.01503 21.1339 4.80817 17.8387C5.98112 18.0059 7.16394 18.0946 8.34873 18.1043C11.1112 18.1043 13.0745 17.5071 14.5301 16.2256C15.8339 15.0777 16.5535 13.5336 17.3151 11.901C18.4777 9.40553 19.7951 6.57847 23.6211 4.39515C23.729 4.33364 23.82 4.24634 23.8858 4.14107C23.9517 4.0358 23.9904 3.91585 23.9984 3.79197C24.0065 3.6681 23.9836 3.54416 23.9319 3.43128C23.8802 3.3184 23.8013 3.22009 23.7022 3.14518V3.14218Z" />
        </SvgIcon>
      </NavLink>
      <Typography
        component={NavLink}
        to="/"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          paddingLeft: '0.5rem',
        }}
      >
        FreshStuff
      </Typography>
    </Box>
  );
}

export default Logo;