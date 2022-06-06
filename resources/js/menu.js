import
{
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette
} from '@mdi/js';

export default [
  'General',
  [
    {
      route: 'dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Models',
  [
    {
      route: 'dashboard',
      label: 'Instructors',
      icon: mdiTable
    },
    {
      route: 'dashboard',
      label: 'Instructors',
      icon: mdiTable
    },
    {
      route: 'dashboard',
      label: 'Instructors',
      icon: mdiTable
    },
  ],
  'About',
  [
    {
      href: 'https://ljsharp.com',
      label: 'LJSharp SoftDev',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: 'https://github.com/ljsharp',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]
];
