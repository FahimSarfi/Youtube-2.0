import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: '4px' }}>
      <img src={logo} alt="logo" height={35} />
    </Link>
    <Typography variant="h6" component="span" fontWeight="bold" color="white" fontSize="1.5rem" marginTop="1px">
      Ftube
    </Typography>
    <SearchBar />
  </Stack>
);

export default Navbar;
