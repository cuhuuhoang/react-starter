import AppHome from "./modules/home/AppHome";
import CommentList from "./modules/comments/CommentList";
import SeasonMain from "./modules/seasons/SeasonMain";
import PicMain from "./modules/pics/PicMain";
import VideoMain from "./modules/videos/VideoMain";
import AccordionMain from "./modules/accordion/AccordionMain";
import WikiMain from "./modules/wiki/WikiMain";
import DropdownMain from "./modules/dropdown/DropdownMain";
import Translate from "./modules/translate/Translate";
import Insurance from "./modules/insurance/Insurance";

// all tab
export const menuConfigs = [
  {
    name: 'home',
    path: '/',
    display: 'Starter',
    html: <AppHome />
  },
  {
    name: 'comment',
    path: '/comment',
    display: 'Comments',
    html: <CommentList />
  },
  {
    name: 'season',
    path: '/season',
    display: 'Seasons',
    html: <SeasonMain />
  },
  {
    name: 'pic',
    path: '/pic',
    display: 'Pics',
    html: <PicMain />
  },
  {
    name: 'video',
    path: '/video',
    display: 'Videos',
    html: <VideoMain />
  },
  {
    name: 'accordion',
    path: '/accordion',
    display: 'Accordion',
    html: <AccordionMain />
  },
  {
    name: 'wiki',
    path: '/wiki',
    display: 'Wiki',
    html: <WikiMain />
  },
  {
    name: 'dropdown',
    path: '/dropdown',
    display: 'Dropdown',
    html: <DropdownMain />
  },
  {
    name: 'translate',
    path: '/translate',
    display: 'Translate',
    html: <Translate />
  },
  {
    name: 'insurance',
    path: '/insurance',
    display: 'Insurance',
    html: <Insurance />
  }
]