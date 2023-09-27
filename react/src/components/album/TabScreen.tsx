import {TabMenu} from "./TabMenu"
import {Album} from "./Album"
import { AlbumImage, getCatImages } from "src/requests/album"
import { useAlbum } from "src/hooks/use-album"

export function TabScreen({ onClickImage }:{ onClickImage: (image:AlbumImage) => void}) {
  const menuList = ['cat','dog'];
  const screen = useAlbum(getCatImages);

  return (
    <div>
      <TabMenu menu={menuList}></TabMenu>
      <Album {...screen} onClickImage={onClickImage}></Album>
    </div>
  )
}