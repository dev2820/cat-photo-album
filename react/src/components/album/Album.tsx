import { useRef,useEffect, type HTMLAttributes, MouseEventHandler } from "react";
import type { AlbumImage } from "src/requests/album";

import "./Album.css";

interface Props extends HTMLAttributes<HTMLUListElement> {
  images: AlbumImage[];
  loadNextImages: ()=>void;
  onClickImage: (image:AlbumImage) => void;
}

export function Album({ images,loadNextImages,onClickImage,className="",  ...props }:Props) {
  const $endOfAlbum = useRef(null);

  const observer = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting) {
      loadNextImages()
    }
  })

  const handleClickImage:MouseEventHandler<HTMLUListElement> = (e) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('li')

    if(!$li) return;

    const index = Number($li.dataset['index'])

    onClickImage(images[index])
  }
  
  useEffect(()=>{
    if($endOfAlbum.current){
      observer.observe($endOfAlbum.current)
    }
  },[])

  return (
    <ul {...props} className={"album " + className} onClick={handleClickImage}>
      {
        images.map((image,i)=>{
          return <li key={`${i}-${image.id}`} data-index={i}>
            <img src={image.url}/>
          </li>
        })
      }
      <li className="end-of-album" ref={$endOfAlbum}></li>
    </ul>
  )
}