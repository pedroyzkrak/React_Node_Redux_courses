import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{

    onSearchSubmit(query) {
        console.log(query);
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px', }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }

}


export default App;

