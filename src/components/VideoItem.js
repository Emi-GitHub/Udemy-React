import React from 'react'
import './VideoItem.css'

function VideoItem(props) {
    return (
        <div className="video-item item" onClick={()=>props.onVideoSelect(props.video)}> {/* funkciju smo stavili kao arrow jer zelimo poslati parametar */}
        {/* kad god zelimo da posaljemo nesto iz child componente prema parent componenti, ne koristimo props, nego callback funkciju */}
            <img 
                className="ui image" 
                src={props.video.snippet.thumbnails.medium.url} 
                alt={props.video.snippet.title}
            />
            <div className="content"> 
                <div className="header">
                    {props.video.snippet.title} {/* snipped.item smo nasli na konzoli */}
                </div>
            </div>
        </div>
    )
}

export default VideoItem
