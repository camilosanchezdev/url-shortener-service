'use client';

import { ElementType } from 'react';
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import Link from 'next/link';

const styles = {
  item: {
    borderRadius: '0.5rem',
    color: '#444444',
    '&:hover': {
      backgroundColor: '#efefef',
      color: 'primary.main',
    },
  },
  link: {
    display: 'flex',
    padding: '10px 0px',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    color: 'inherit',
    minWidth: '40px',
    fontSize: '1.3rem',
    display: 'flex',
    justifyContent: 'center',
  },
};

type Props = {
  route: string;
  label: string;
  icon: ElementType;
  open: boolean;
};

export default function SidebarMenuItem({ label, route, icon: Icon, open }: Props) {
  return (
    <ListItem disablePadding sx={styles.item}>
      <Tooltip title={label} disableHoverListener={open}>
        <Link href={route} style={styles.link}>
          <ListItemIcon sx={styles.icon}>
            <Icon />
          </ListItemIcon>
          {open && (
            <ListItemText
              primary={label}
              primaryTypographyProps={{ fontSize: '0.9rem' }}
              sx={{ color: 'inherit' }}
            />
          )}
        </Link>
      </Tooltip>
    </ListItem>
  );
}
