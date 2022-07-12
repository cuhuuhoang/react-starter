import AppHome from "./components/home/AppHome";
import CommentList from "./components/comments/CommentList";
import SeasonMain from "./components/seasons/SeasonMain";
import PicMain from "./components/pics/PicMain";

// tab name with big name
export const homeTab = 'home'
// tab open on start up
export const defaultTab = 'home'
// all tab
export const itemConfigArrays = [
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
  }
]