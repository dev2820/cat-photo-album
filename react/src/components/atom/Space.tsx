import { HTMLAttributes } from "react"
import { addPx } from "src/utils/string";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export const Space = ({ size }: Props) => {
  const style = createStyle(size)
  return <div className="space" style={style}></div>
}

const createStyle = (size?:number) => {
  if(!size) {
    return {
      flexGrow:1
    }
  }
  return {
    width: addPx(size),
    height: addPx(size)
  }
}