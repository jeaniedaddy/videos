import "./VideoItem.css";
import React from 'react';

class VideoItem extends React.Component {
    render(){
        const video = this.props.video;
        return (
            <div className="video-item item" onClick={()=>{this.props.onVideoClick(video)}}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                    {/* <div className="description">{video.snippet.description}</div> */}
                </div>
            </div>
        );
    }
}

export default VideoItem;