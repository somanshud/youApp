import React from 'react';
import './ImageList.css';
// only assign the key to root element
const ImageList = (props)=>{
    console.log(props);
    const Img = props.images.map((image)=>{
        return <div key ={image.id} ><img  src={image.urls.regular} alt ={image.description} /></div>
    });
    return <div className="image-list">{Img}</div>
}

export default ImageList;