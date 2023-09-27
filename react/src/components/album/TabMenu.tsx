import { HTMLAttributes, MouseEventHandler} from "react";
import { Icon } from "src/components/atom";

import "./TabMenu.css";

interface Props extends HTMLAttributes<HTMLMenuElement> {
  menu: string[];
  onSelectMenu?: (index:number) => void;
}

export function TabMenu({ menu,onSelectMenu, className="",...props }:Props) {
  const onClickMenu:MouseEventHandler<HTMLElement> = (evt) => {
    const $target = evt.target as HTMLElement;
    const $li = $target.closest('li')

    if(!$li) return;

    const index = Number($li.dataset['index'])
    onSelectMenu ? onSelectMenu(index) : ''
  }

  return (
    <menu className={"tab-menu " + className} onClick={onClickMenu} {...props}>
      {
        menu.map((m,i)=>{
          return <li key={m} data-index={i}><Icon name={m} ></Icon></li>
        })
      }
    </menu>
  )
}