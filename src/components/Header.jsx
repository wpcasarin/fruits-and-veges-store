import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './shared/Logo';

function Header({ currentPage }) {
  const [value, setValue] = useState(currentPage);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box display="flex" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            <Logo />
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
          <Tabs
            value={value}
            onChange={handleChange}
            component={'nav'}
            sx={{ marginLeft: 'auto', flexGrow: 1 }}
          >
            <Tab label="Início" component={NavLink} to="/" />
            <Tab label="Produtos" component={NavLink} to="/products" />
            <Tab label="Sobre Nós" component={NavLink} to="/about" />
            <Tab
              icon={<CartIcon />}
              component={NavLink}
              to="/cart"
              sx={{ marginLeft: 'auto' }}
            />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
