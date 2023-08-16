import React, { useState } from 'react';
import { Stack, Typography, Modal, Box, List, ListItemButton, Divider, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountCircle, Brightness4, ExitToApp, Feedback, Settings, Login, Person, Notifications, History } from '@mui/icons-material'; // Import icons from MUI

import { logo } from '../utils/constants';
import { SearchBar } from './';

const categories = [
  { label: 'Login', icon: <Login />, onClick: () => console.log('Login clicked') },
  { label: 'Logout', icon: <ExitToApp />, onClick: () => console.log('Logout clicked') },
  { label: 'Account', icon: <AccountCircle />, onClick: () => console.log('Account clicked') },
  { label: 'Appearance', icon: <Brightness4 />, onClick: () => console.log('Appearance clicked') },
  { label: 'Feedback', icon: <Feedback />, onClick: () => console.log('Feedback clicked') },
  { label: 'Settings', icon: <Settings />, onClick: () => console.log('Settings clicked') },
];

const recentVideos = [
  { id: 'video1', title: 'Recent Video 1' },
  { id: 'video2', title: 'Recent Video 2' },
  { id: 'video3', title: 'Recent Video 3' },
];

const Navbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const handleOverlayOpen = () => {
    setOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setOverlayOpen(false);
  };

  const handleNotificationClick = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleHistoryClick = () => {
    setHistoryOpen(!historyOpen);
  };

  return (
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
      <Icon
        variant="contained"
        color="primary"
        onClick={handleNotificationClick}
        sx={{
          width: '20px',
          height: '30px',
          minWidth: 'unset',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <Notifications sx={{ color: 'white', fontSize: '1.5rem' }} />
      </Icon>
      <Icon
        variant="contained"
        color="primary"
        onClick={handleHistoryClick}
        sx={{
          width: '20px',
          height: '30px',
          marginLeft: '18px',
          minWidth: 'unset',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <History sx={{ color: 'white', fontSize: '1.5rem' }} />
      </Icon>
      <Icon
        variant="contained"
        color="primary"
        onClick={handleOverlayOpen}
        sx={{
          borderRadius: '50%',
          width: '36px',
          height: '30px',
          marginLeft: '18px',
          minWidth: 'unset',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': { transform: 'scale(1.2)' },
        }}
      >
        <Person sx={{ color: 'white', fontSize: '1.6rem' }} />
      </Icon>
      <Modal open={overlayOpen} onClose={handleOverlayClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: '300px',
            bgcolor: '#f8f8f8',
            border: 'none',
            borderRadius: '15px',
            boxShadow: 24,
            p: 2,
          }}
        >
          <List>
            {categories.map((category) => (
              <React.Fragment key={category.label}>
                <ListItemButton onClick={category.onClick}>
                  <span>{category.icon}</span>
                  <span style={{ marginLeft: '20px' }}>{category.label}</span>
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Modal>
      <Modal open={notificationOpen} onClose={handleNotificationClick}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            bgcolor: '#f8f8f8',
            border: 'none',
            borderRadius: '15px',
            boxShadow: 24,
            p: 2,
          }}
        >
          <List>
            {recentVideos.map((video) => (
              <React.Fragment key={video.id}>
                <ListItemButton>
                  <Typography variant="body1" color="#333" style={{ marginLeft: '20px' }}>
                    {video.title}
                  </Typography>
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Modal>
      <Modal open={historyOpen} onClose={handleHistoryClick}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            bgcolor: '#f8f8f8',
            border: 'none',
            borderRadius: '15px',
            boxShadow: 24,
            p: 2,
          }}
        >
          <List>
            {recentVideos.map((video) => (
              <React.Fragment key={video.id}>
                <ListItemButton>
                  <Typography variant="body1" color="#333" style={{ marginLeft: '20px' }}>
                    {video.title}
                  </Typography>
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Navbar;
