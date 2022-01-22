import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { AppBar, Container, Tab, Tabs, Toolbar } from '@mui/material';
import CartIcon from './HeaderCart';
import Logo from './shared/LogoLink';

function Header({ currentPage }) {
  const [value, setValue] = useState(currentPage);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const pages = [
    {
      id: 0,
      name: 'Início',
      to: '/',
    },
    {
      id: 1,
      name: 'Produtos',
      to: '/products',
    },
    {
      id: 2,
      name: 'Sobre Nós',
      to: '/about',
    },
    {
      id: 3,
      name: '',
      icon: (
        <>
          <CartIcon />
        </>
      ),
      to: '/cart',
    },
  ];

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
          <Logo />
          <Tabs
            value={value}
            onChange={handleChange}
            component={'nav'}
            sx={{ marginLeft: 'auto', flexGrow: 1 }}
          >
            {pages.map((page, index) => (
              <Tab
                key={index}
                label={page.name}
                icon={page.icon}
                component={NavLink}
                to={page.to}
              />
            ))}
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.defaultProps = {
  currentPage: 0,
};

Header.prototype = {
  currentPage: propTypes.string,
};

export default Header;
