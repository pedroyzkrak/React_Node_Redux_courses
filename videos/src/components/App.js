import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyCq2_PqU-ErcTrCNcdXh4jX_wD64mkb6vk';


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
      this.onTermSubmit('buildings')
    }
    onTermSubmit = async term => {
        const response = await Youtube.get("/search", {
          params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
            key:KEY
          }
        });

        this.setState({ 
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };
    
    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="nine wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="seven wide column">
                  <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
              </div>
            </div>
        </div>
        );
    } 
}

export default App;