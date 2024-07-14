import {
  HomeIcon,
  BoxIcon,
  DashboardIcon,
  MobileIcon,
} from '@radix-ui/react-icons';

const sidebar = [
  {
    path: '/',
    icon: HomeIcon,
    name: 'Home',
  },

  {
    path: '/products',
    icon: BoxIcon,
    name: 'Products',
  },
  {
    path: '/categories',
    icon: DashboardIcon,
    name: 'Categories',
  },

  {
    path: '/contact',
    icon: MobileIcon,
    name: 'Contact',
  },
];

export default sidebar;
