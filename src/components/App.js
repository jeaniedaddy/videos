import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onVideoClick = (video) => {
        console.log(video);
        this.setState({selectedVideo: video});
    }

    onTermSubmit= async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: res.data.items, selectedVideo: res.data.items[0]});
    }

    componentDidMount(){
        this.onTermSubmit('house');
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail className="two wide column" video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList className="two wide column" videos={this.state.videos} onVideoClick={this.onVideoClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;