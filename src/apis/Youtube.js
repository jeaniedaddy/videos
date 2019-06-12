import axios from 'axios';

import { KEY } from './youtubeKey';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY,
        maxResults: 5
    }
});