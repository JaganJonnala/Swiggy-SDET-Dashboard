// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: '',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        }
    ]
};
