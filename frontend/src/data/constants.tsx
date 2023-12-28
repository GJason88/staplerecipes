import FlatwareIcon from '@mui/icons-material/Flatware';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FeedIcon from '@mui/icons-material/Feed';
// import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const appbarXL = '128px';

export const appbarL = '114px';

export const appbarM = '89px';

export const appbarS = '65px';

export const drawerWidth = 270;

export const recipeWidth = 900;

export const iconButtonWidth = 40;

export const debounceDelay = 500; // .5 sec

export const maxChars = 75;

export const pLen = 16;

export const tags = ['Under 20 Minutes', 'Easy Cleanup', 'High Protein'];

export const publicRoutes = {
  home: {
    name: 'Home',
    route: '/',
    icon: <HomeIcon key='home' />,
  },
  recipes: {
    name: 'Recipes',
    route: '/recipes',
    icon: <MenuBookTwoToneIcon key='recipes' />,
  },
  tools: {
    name: 'Tools',
    route: '/tools',
    icon: <FlatwareIcon key='tools' />,
  },
  ingredients: {
    name: 'Ingredients',
    route: '/ingredients',
    icon: <KitchenIcon key='ingredients' />,
  },
  nutrition: {
    name: 'Nutrition',
    route: '/nutrition',
    icon: <FeedIcon key='nutrition' />,
  },
  // mealplans: {
  //   name: 'Meal Plans',
  //   route: '/mealplans',
  //   icon: <CalendarViewMonthIcon key='mealplan' />,
  // },
};

export const adminRoute = {
  name: 'Admin',
  route: '/admin',
  icon: <AdminPanelSettingsIcon key='admin' />,
};
