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
import Songs from "./modules/songs/components/Songs";
import Blog from "./modules/blog/components/Blog";
import StreamMain from "./modules/stream/components/StreamMain";

// all tab
export const menuConfigs = [
  {
    name: '',
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
  },
  {
    name: 'insurance',
    display: 'Insurance',
    html: <Insurance />
  },
  {
    name: 'songs',
    display: 'Songs',
    html: <Songs />
  },
  {
    name: 'blog',
    display: 'Blog',
    html: <Blog />
  },
  {
    name: 'streams',
    display: 'Streams',
    html: <StreamMain />
  }
]