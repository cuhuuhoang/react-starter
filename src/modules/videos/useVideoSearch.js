import {useState} from "react";
import youtube from "./youtube";

const useVideoSearch = () => {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = (term) => {
    setLoading(true);
    (async () => {
      const response = await youtube.get('/search', {
        params: {q: term}
      });
      setVideos(response.data.items);
      setLoading(false);
    })();
  };

  return [videos, search, loading];
}

export default useVideoSearch