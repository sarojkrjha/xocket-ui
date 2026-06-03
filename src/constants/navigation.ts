import {
  LayoutDashboard,
  Users,
  UserCircle,
  Briefcase,
  Scale,
  AlertTriangle,
  ShieldAlert,
  FileText,
  FolderOpen,
  Clock3,
  BarChart3,
  Settings,
  Building2,
  Landmark,
  Gavel,
  Scale3D,
  Upload,
  Database,
  FileArchive,
  CreditCard,
  Activity,
} from 'lucide-react'

import type { NavigationItem } from '@/types/navigation'

export const navigation: NavigationItem[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },

  {
    title: 'Accounts',
    icon: Users,
    children: [
      {
        title: 'Accounts',
        path: '/accounts',
        icon: Users,
      },
      {
        title: 'Contacts',
        path: '/contacts',
        icon: UserCircle,
      },
    ],
  },

  {
    title: 'Administration',
    icon: Building2,
    children: [
      {
        title: 'Clients',
        path: '/clients',
        icon: Building2,
      },
    ],
  },

  {
    title: 'Bankruptcy',
    icon: Briefcase,
    children: [
      {
        title: 'Cases',
        path: '/cases',
        icon: Briefcase,
      },
      {
        title: 'Courts',
        path: '/courts',
        icon: Landmark,
      },
      {
        title: 'Trustees',
        path: '/trustees',
        icon: Gavel,
      },
      {
        title: 'Attorneys',
        path: '/attorneys',
        icon: Scale3D,
      },
    ],
  },

  {
    title: 'Matching',
    icon: Scale,
    children: [
      {
        title: 'Matching',
        path: '/matching',
        icon: Scale,
      },
      {
        title: 'Unmatched',
        path: '/unmatched',
        icon: AlertTriangle,
      },
      {
        title: 'Flagged',
        path: '/flagged',
        icon: ShieldAlert,
      },
      {
        title: 'Legal Review',
        path: '/legal-review',
        icon: FileText,
      },
    ],
  },

  {
    title: 'Claims',
    icon: FileText,
    children: [
      {
        title: 'Claims',
        path: '/claims',
        icon: FileText,
      },
      {
        title: 'Filing Queue',
        path: '/filing',
        icon: FolderOpen,
      },
      {
        title: 'Documents',
        path: '/claim-documents',
        icon: FileArchive,
      },
      {
        title: 'Payments',
        path: '/claim-payments',
        icon: CreditCard,
      },
    ],
  },

  {
    title: 'Timeline',
    icon: Clock3,
    children: [
      {
        title: 'Timeline',
        path: '/timeline',
        icon: Clock3,
      },
      {
        title: 'Events',
        path: '/timeline-events',
        icon: Activity,
      },
    ],
  },

  {
    title: 'Operations',
    icon: Database,
    children: [
      {
        title: 'Imports',
        path: '/imports',
        icon: Upload,
      },
      {
        title: 'Scrubbing',
        path: '/scrubbing',
        icon: Database,
      },
    ],
  },

  {
    title: 'Reporting',
    icon: BarChart3,
    children: [
      {
        title: 'Reports',
        path: '/reports',
        icon: BarChart3,
      },
      {
        title: 'Analytics',
        path: '/analytics',
        icon: BarChart3,
      },
    ],
  },

  {
    title: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]