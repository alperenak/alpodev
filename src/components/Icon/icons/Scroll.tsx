import * as React from 'react';

function SvgScroll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 17 10" {...props}>
      <path className="scroll_svg__cls-1" d="M6.22 8.75L3.37 5.89H17V4.12H3.37l2.85-2.87L5 0 0 5l5 5z" />
    </svg>
  );
}

export default SvgScroll;
