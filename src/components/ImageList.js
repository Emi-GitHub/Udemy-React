import React from 'react'

function ImageList(props) {
    const images = props.images.map((image) => {
        return <div className="ui medium bordered rounded image">
<img  src={image.urls.small} key={image.id} alt={image.alt_description}/>
        </div> 
        
    });
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList
