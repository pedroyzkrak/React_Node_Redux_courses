import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images: [] };

    onSearchSubmit = async (query) => {
        //using async await formula instead of using the promise formula (which is in comments below)
        const response = await unsplash.get('/search/photos', {
            params: { query: query }
        })
        
        this.setState({ images: response.data.results });
        
        /*.then((response) => {
            do things with state
        });*/
    }

    componentDidUpdate() {

    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px', }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }

}


export default App;

