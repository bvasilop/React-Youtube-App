import React from 'react';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('chicago cubs');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="sixteen wide mobile sixteen wide tablet eleven wide computer column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="sixteen wide mobile sixteen wide tablet five wide computer column">
              <Scroll>
                <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
