import * as React from 'react';

const Preloader = () => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: `auto`,
      background: `#F5F5F5`,
      display: `block`,
      shapeRendering: `auto`,
      height: 100 + `vh`
    }}
    width="163px"
    height="163px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#4481c3"
      strokeWidth="10"
      r="30"
      strokeDasharray="141.37166941154067 49.12388980384689"
      transform="rotate(325.358 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.2345679012345678s"
        values="0 50 50;360 50 50"
        keyTimes="0;1">
      </animateTransform>
    </circle>
  </svg>;
};

export default Preloader;
