import { HTMLAttributes } from "react";

import "./RoundAvatar.css";

export interface Props extends HTMLAttributes<HTMLImageElement> {
  size?: number;
  alt?: string;
  src: string;
}
export function RoundAvatar({size, src,className="",alt="", ...props}:Props) {
  return (
    <img className={"round-avatar " + className} src={src} {...props} width={size} height={size} alt={alt}></img>
  )
}