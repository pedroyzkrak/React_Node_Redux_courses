import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/youtube';
const KEY = 'AIzaSyCq2_PqU-ErcTrCNcdXh4jX_wD64mkb6vk';

class App extends React.Component {

    state = { videos: [] };
    onTermSubmit = async term => {
        const response = await Youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });

        this.setState({ videos: response.data.items });
    }
    
    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            I have {this.state.videos.length}.
        </div>
        );
    } 




}

export default App;