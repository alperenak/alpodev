import * as React from 'react';
import './index.css';

function SvgHello(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 132 159" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="#000" strokeWidth={8}>
        <path
          d="M16.75 0.699997V18.712H30.18V0.699997H45.98V56H30.18V34.038H16.75V56H0.950001V0.699997H16.75Z"
          stroke="black"
          stroke-width="8"
          className="path"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M53.8738 0.699997H89.0288V15.078H69.6738V21.082H87.0538V35.302H69.6738V41.464H89.4238V56H53.8738V0.699997Z"
          stroke="black"
          stroke-width="8"
          className="path"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M0.950001 157V101.7H16.75V141.674H34.13V157H0.950001Z"
          stroke="black"
          stroke-width="8"
          className="path"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M38.907 157V101.7H54.707V141.674H72.087V157H38.907Z"
          stroke="black"
          stroke-width="8"
          className="path"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M80.9505 108.731C86.5331 103.201 93.4851 100.436 101.806 100.436C110.075 100.436 117.027 103.227 122.662 108.81C128.298 114.34 131.115 121.187 131.115 129.35C131.115 137.513 128.324 144.36 122.741 149.89C117.106 155.473 110.128 158.264 101.806 158.264C93.4851 158.264 86.5068 155.525 80.8715 150.048C75.2888 144.518 72.4975 137.619 72.4975 129.35C72.4975 121.134 75.3151 114.261 80.9505 108.731ZM88.2975 129.35C88.2975 133.247 89.5615 136.46 92.0895 138.988C94.6175 141.516 97.8565 142.78 101.806 142.78C105.704 142.78 108.916 141.516 111.444 138.988C114.025 136.46 115.315 133.247 115.315 129.35C115.315 125.505 114.025 122.319 111.444 119.791C108.916 117.21 105.704 115.92 101.806 115.92C97.9091 115.92 94.6701 117.184 92.0895 119.712C89.5615 122.187 88.2975 125.4 88.2975 129.35Z"
          stroke="black"
          stroke-width="8"
          className="path"
          mask="url(#path-1-inside-1)"
        />
      </g>
    </svg>
  );
}

export default SvgHello;