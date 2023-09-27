import { HTMLAttributes } from "react";
import "./RowList.css";

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export function RowList ({ children, className='', ...props}:Props) {
  
  return (
    <div className={"row-list "+className} {...props}>
      { children }
    </div>
  )
}