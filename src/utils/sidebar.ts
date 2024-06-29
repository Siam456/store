import {
  // ChatBubbleLeftRightIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

import { CogIcon, UsersIcon } from '@heroicons/react/24/outline';

const sidebar = [
  {
    path: '/dashboard',
    icon: Squares2X2Icon,
    name: 'dashboard',
  },

  {
    path: '/users',
    icon: UsersIcon,
    name: 'Users',
  },
  {
    path: '/admins',
    icon: UsersIcon,
    name: 'Admins',
  },

  {
    path: '/settings',
    icon: CogIcon,
    name: 'Settings',
  },

  // {
  //   path: '/dashboard/dealer',
  //   icon: GlobeAsiaAustraliaIcon,
  //   name: 'Dealers',
  // },
];

export default sidebar;
