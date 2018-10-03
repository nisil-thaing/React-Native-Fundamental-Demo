import ApiClient from './Api';

export default class VideoService {
  constructor() {
    this.api = new ApiClient();
  }

  fetchVideoList() {
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=김달림과하마발&type=video&key=AIzaSyD3dTzsXkmKhNEPbbE4j6QDPJs3otl_w4c';
    return this.api.fetchData(url);
  }
}