import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { LocalShipping, Settings } from "@mui/icons-material";
export const sidebarMenu = [
    {
        title: 'Dashboard',
        icon: HomeOutlinedIcon,
        path: '/',
    },
    {
        title: 'Info',
        tag: 'divider'
    },
    {
        title: 'OrderHistry',
        icon: PeopleOutlinedIcon,
        path: '/OrderHistry',
    },
    {
        title: 'Notification',
        icon: NotificationsOutlinedIcon,
        path: '/Notification',
    },
    {
        title:'Deliveries',
        icon:LocalShipping
    },
    {
        title:'Settings',
        icon:Settings
    }
   
]