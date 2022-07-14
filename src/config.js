import AppHome from "./components/home/AppHome";
import CommentList from "./components/comments/CommentList";
import SeasonMain from "./components/seasons/SeasonMain";
import PicMain from "./components/pics/PicMain";
import VideoMain from "./components/videos/VideoMain";
import AccordionMain from "./components/accordion/AccordionMain";
import WikiMain from "./components/wiki/WikiMain";
import DropdownMain from "./components/dropdown/DropdownMain";
import Translate from "./components/translate/Translate";

// tab name with big name
export const homeMenuIndex = 0
// tab open on start up
export const defaultMenuIndex = 0
// all tab
export const menuConfigs = [
  {
    name: 'home',
    display: 'Starter',
    html: <AppHome />
  },
  {
    name: 'comment',
    display: 'Comments',
    html: <CommentList />
  },
  {
    name: 'season',
    display: 'Seasons',
    html: <SeasonMain />
  },
  {
    name: 'pic',
    display: 'Pics',
    html: <PicMain />
  },
  {
    name: 'video',
    display: 'Videos',
    html: <VideoMain />
  },
  {
    name: 'accordion',
    display: 'Accordion',
    html: <AccordionMain />
  },
  {
    name: 'wiki',
    display: 'Wiki',
    html: <WikiMain />
  },
  {
    name: 'dropdown',
    display: 'Dropdown',
    html: <DropdownMain />
  },
  {
    name: 'translate',
    display: 'Translate',
    html: <Translate />
  }
]