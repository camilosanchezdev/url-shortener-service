'use client';

import { RxDashboard } from 'react-icons/rx';
import { FiUsers } from 'react-icons/fi';
import { GrConfigure } from 'react-icons/gr';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { IconType } from 'react-icons';

import { Typography } from '@mui/material';
import SidebarMenuItem from '@/components/layout/sidebar/item';
import { FaLink } from 'react-icons/fa6';
type MenuType = {
  title: string;
  items: MenuItemType[];
};
type MenuItemType = {
  label: string;
  icon: IconType;
  route: string;
};
const menu: MenuType[] = [
  {
    title: 'Main menu',
    items: [
      {
        label: 'Dashboard',
        icon: RxDashboard,
        route: '/dashboard',
      },
      {
        label: 'Links',
        icon: FaLink,
        route: '/links',
      },
    ],
  },
  {
    title: 'Preferences',
    items: [
      {
        label: 'Settings',
        icon: GrConfigure,
        route: '/settings',
      },
      {
        label: 'Help',
        icon: MdOutlineLiveHelp,
        route: '/help',
      },
    ],
  },
];
type SidebarMenuProps = {
  open: boolean;
};
export default function SidebarMenu({ open }: SidebarMenuProps) {
  return (
    <>
      {menu.map((el) => (
        <section key={el.title}>
          {open && (
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{ color: '#444444', margin: '5px', fontWeight: 'bold' }}
            >
              {el.title}
            </Typography>
          )}
          <ul>
            {el.items.map(({ icon, label, route }) => (
              <SidebarMenuItem
                label={label}
                icon={icon}
                route={route}
                key={`${label}-${route}`}
                open={open}
              />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
