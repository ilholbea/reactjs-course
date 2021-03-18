import { useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
  //  return { videos, search };
};

export default useVideos;
