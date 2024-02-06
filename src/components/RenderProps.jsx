import React, { useState } from 'react';
function RenderProps(props) {
  const { render } = props;

  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = () => {
    setLikeImageCounter(likeImageCounter + 1);
  };

  return <div>{render(likeImageCounter, handleLikeImageCount)}</div>;
}

export default RenderProps;
