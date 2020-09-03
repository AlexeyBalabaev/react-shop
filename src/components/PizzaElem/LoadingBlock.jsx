import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="138" cy="122" r="118" /> 
      <rect x="0" y="260" rx="6" ry="6" width="280" height="26" /> 
      <rect x="0" y="300" rx="6" ry="6" width="280" height="84" /> 
      <rect x="0" y="402" rx="6" ry="6" width="95" height="32" /> 
      <rect x="135" y="395" rx="20" ry="20" width="141" height="45" />
    </ContentLoader>
  )
}

export default LoadingBlock;
