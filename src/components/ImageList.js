import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
/*
=> Rendering images from the images array, React has to append each image to the DOM. How to allow React to be able to append each image element to the DOM, we have to add a "key prop" to each element in the list of items we are rendering. With "key prop", when we rerender, React will just compare the "key prop" to the current DOM on the screen. If that key already existed, it wont append that element to the DOM, but if it hasn't, that new element will be appended. With "key prop" makes React rerender quicker.
NOTE: Make sure that you include a key on every element that you render as part of a LIST
NOTE: Set the "key prop" at the root element(parent element) that we are returning from a list. In this case, the only element is <img/> , So we set "key prop" on <img/>
NOTE: "alt prop" is a descriptive or a description of the image that we trying to show on the screen, in case the image is not able to be fetched.
NOTE: image={image}=> this is how we pass the image object to ImageCard component, anf ImageCard we access it by doing : this.props.image.description
 
 */

const ImageList = (props) => {
  //   console.log(props.images);

  /*
    => No destructive version
    const images = props.images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
    */
  // => Destructive version
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
