import React, { useMemo } from 'react';
import Drawer from '@mui/material/Drawer';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import SidebarMenu from '@/components/layout/sidebar/menu';

type Props = {
  open: boolean;
  greaterThan900: boolean;
  setOpen: (val: boolean) => void;
};
export default function Sidebar({ open, setOpen, greaterThan900 }: Props) {
  const sidebarWidth = useMemo(() => {
    if (greaterThan900) {
      return open ? '260px' : '72px';
    }
    return '260px';
  }, [greaterThan900, open]);
  return (
    <Drawer
      variant={greaterThan900 ? 'permanent' : 'temporary'}
      onClose={() => setOpen(false)}
      open={open}
      sx={{
        zIndex: 1050,
        width: sidebarWidth,
        '& .MuiPaper-root': {
          border: 0,
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          margin: 0,
          width: open ? '260px' : '72px',
        }}
      >
        <Box component="aside">
          <Box
            sx={{
              minHeight: 'calc(100vh - 84px)',
              padding: '10px 10px',
            }}
          >
            <SidebarMenu open={open} />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
