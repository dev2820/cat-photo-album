import { HTMLAttributes } from 'react'
import { addPx } from 'src/utils/string';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  namespace?: string;
  width?: number;
  height?: number;
}

export function Icon({ name, namespace="icons", width=24,height=24, ...props}:Props) {
  const iconPath = `./${namespace}.svg#${name}`
  
  return (
    <span {...props} style={{ display:"inline-block", width: addPx(width), height:addPx(height) }}>
      <svg width={width} height={height}>
        <use xlinkHref={iconPath}></use>
      </svg>
    </span>
  )
}