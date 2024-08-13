'use client';

import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiLogout } from 'react-icons/ci';
import { signOut } from 'next-auth/react';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';

const styles = {
  avatar: { backgroundColor: '#2f4165' },
  menuItem: { display: 'flex', gap: 1 },
};
export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <IconButton sx={{}} onClick={handleClick}>
          <Avatar sx={styles.avatar}>A</Avatar>
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        title="Menu user"
      >
        <MenuItem
          onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
          sx={styles.menuItem}
        >
          <CiLogout />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
