import regIcon from '../assets/loginbtn.png'
import darkProfile from '../assets/dark_profile.png'


export const navItems = [
  {
    id: "1",
    title: "Home",
    routeLink:'/'
  },
  {
    id: "2",
    title: "About Us",
    routeLink:'/about',
  },
  {
    id: "3",
    title: "Contact",
    routeLink:'/contact',
  },
  {
    id: "4",
    title: "Log in/Sign up",
    icon: regIcon,
    icon_dark:darkProfile,
    routeLink:'/login',
  },
];
