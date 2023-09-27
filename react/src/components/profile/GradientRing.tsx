import { HTMLAttributes } from "react"
import GradientRingSvg from "src/assets/gradient-ring.svg";

interface Props extends HTMLAttributes<HTMLImageElement> {
  size?: number;
  strokeWidth?: number;
}

export function GradientRing({size = 24, ...props}:Props) {

  return (
      <img src={GradientRingSvg} width={size} height={size} alt="gradient ring" role="presentation" {...props}/>
  )
}