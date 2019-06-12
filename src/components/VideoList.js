import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    renderList(){
        return (
            this.props.videos.map(a => {
                return (
                    <VideoItem 
                        key={a.etag} 
                        video={a} 
                        onVideoClick={this.props.onVideoClick} 
                    />
                );
            })
        );
    }

    render(){

        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

export default VideoList;