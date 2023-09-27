import { MouseEventHandler, useEffect, useRef, useState } from "react"; 

import { BaseLayout } from "src/layouts/BaseLayout"
import { Section } from "src/layouts/Section"
import { ProfileDetail ,ProfileSummary, FollowerList } from "src/components/profile"
import { TabScreen } from "src/components/album"

import type { Profile,Follower } from "src/requests/profile";
import { getProfile, defaultProfile, getFollowers } from "src/requests/profile";

import './App.css'
import { AlbumImage } from "./requests/album";

function App() {
  const username = "dev2820";
  const [profile, setProfile] = useState<Profile>(defaultProfile)
  const [followers, setFollowers] = useState<Follower[]>([])
  const [selectedImage, setSelectedImage] = useState<AlbumImage|undefined>()
  const $modal = useRef(null);

  const fetchProfile = async () => {
    const profile = await getProfile(username)
    setProfile(profile)
  }

  const fetchFollowers = async () => {
    const followers = await getFollowers(username)
    setFollowers(followers)
  }

  const onClickBackdrop = () => {
    if($modal.current) {
      const $target = $modal.current as HTMLDivElement;
      $target.classList.toggle('hidden');
      setSelectedImage(undefined);
    }
  }
  const onClickImage = (image:AlbumImage) => {
    setSelectedImage(image);
    if($modal.current) {
      const $target = $modal.current as HTMLDivElement;
      $target.classList.toggle('hidden');
    }
  }
  const stopPropagation:MouseEventHandler<HTMLImageElement> = (e) => {
    e.stopPropagation();
  }

  useEffect(()=>{
    fetchProfile();
    fetchFollowers();
  },[])

  return (
    <>
      <BaseLayout>
        <Header title={username}></Header>
        <Section title="profile-summary">
          <ProfileSummary profile={profile}></ProfileSummary>
        </Section>
        <Section title="profile">
          <ProfileDetail profile={profile}></ProfileDetail>
        </Section>
        <Section title="followers">
          <FollowerList followers={followers}></FollowerList>
        </Section>
        <Section title="album">
          <TabScreen onClickImage={onClickImage}></TabScreen>
        </Section>
      </BaseLayout>
      <div id="modal" ref={$modal} className="hidden" onClick={onClickBackdrop}>
        {
          selectedImage && 
            <img
            id="modal-content"
            src={selectedImage.url}
            width={selectedImage.width}
            height={selectedImage.height}
            onClick={stopPropagation}
          />
        }
      </div>
    </>
  )
}

const Header = ({ title }:{ title: string}) => {
  return (<>
    <h2>{title}</h2>
  </>)
}

export default App
