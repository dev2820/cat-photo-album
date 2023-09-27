import { HTMLAttributes } from "react";
import { GradientRing } from "./GradientRing";
import "./GradientRing.css";
import { addPx } from "src/utils/string";

interface Props extends HTMLAttributes<HTMLDivElement> {
  url?: string,
  size?: number
}
export function GradientRingAvatar({ url = '', size = 24,className="", ...props }: Props) {
  
  return (
    <div {...props} className={"gradient-ring-avatar " + className} style={{ width:addPx(size), height: addPx(size)}}>
      <GradientRing className="gradient-ring" size={size}></GradientRing>
      <img className="avatar" src={url} width={size-24} height={size-24} />
    </div>
  )
}