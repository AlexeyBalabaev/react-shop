import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="138" cy="122" r="118" /> 
      <rect x="0" y="275" rx="6" ry="6" width="280" height="26" /> 
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
      <rect x="0" y="418" rx="6" ry="6" width="95" height="32" /> 
      <rect x="135" y="408" rx="25" ry="25" width="140" height="45" />
    </ContentLoader>
  )
}

export default LoadingBlock;
