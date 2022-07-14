import AppHome from "./components/home/AppHome";
import CommentList from "./components/comments/CommentList";
import SeasonMain from "./components/seasons/SeasonMain";
import PicMain from "./components/pics/PicMain";
import VideoMain from "./components/videos/VideoMain";
import AccordionMain from "./components/accordion/AccordionMain";
import WikiMain from "./components/wiki/WikiMain";
import DropdownMain from "./components/dropdown/DropdownMain";
import Translate from "./components/translate/Translate";

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
  }
]