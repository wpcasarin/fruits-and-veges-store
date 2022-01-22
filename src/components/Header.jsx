import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCart';

function Header({ currentPage }) {
  const [value, setValue] = useState(currentPage);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container component={'header'}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        component={'nav'}
      >
        <Box padding="20px" marginRight="auto">
          <Typography variant="h6" component={NavLink} to="/">
            LOGO
          </Typography>
        </Box>
        <Tab label="Início" component={NavLink} to="/" />
        <Tab label="Produtos" component={NavLink} to="/products" />
        <Tab label="Sobre Nós" component={NavLink} to="/about" />
        <Box padding="20px" marginLeft="auto"></Box>
        <Tab icon={<CartIcon />} component={NavLink} to="/cart" />
      </Tabs>
    </Container>
  );
}

export default Header;
