import React from 'react';

class VideoDetail extends React.Component {
    render(){
        if(!this.props.video){
            return <div>Loading...</div>;
        }

        const src = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        const video = this.props.video;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={src} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            title={video.snippet.title}
                    /> 
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
