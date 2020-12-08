import React from 'react';

const Logo = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="67"
      viewBox="0 0 45 67">
      <g transform="translate(-74.5 -21)">
        <text
          transform="translate(77 75)"
          fill={color ?? '#53ac9e'}
          fontSize="50"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700">
          <tspan x="0" y="0">
            N
          </tspan>
        </text>
        <path
          d="M4,0,8,7H0Z"
          transform="translate(74.5 64) rotate(-90)"
          fill={color ?? '#53ac9e'}
        />
        <path
          d="M4,0,8,7H0Z"
          transform="translate(119.5 56) rotate(90)"
          fill={color ?? '#53ac9e'}
        />
      </g>
    </svg>
  );
};

export default Logo;
