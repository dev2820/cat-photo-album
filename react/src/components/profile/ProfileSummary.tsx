
import { HTMLAttributes } from "react";
import { Space, RowList } from "src/components/atom";
import type { Profile } from "src/requests/profile";
import { toLocale } from "src/utils/string";
import "./ProfileSummary.css";
import { GradientRingAvatar } from "./GradientRingAvatar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

export const ProfileSummary = ({ profile, ...props }: Props) => {
  return (
    <RowList {...props}>
      <GradientRingAvatar url={profile.avatarUrl} size={100}></GradientRingAvatar>
      <Space size={60}></Space>
      <div className="total-list">
        <div className="total">
          <b>{ toLocale(profile.publicRepos) }</b><span>Repos</span>
        </div>
        <div className="total">
          <b>{ toLocale(profile.followers) }</b><span>Followers</span>
        </div>
        <div className="total">
          <b>{ toLocale(profile.following) }</b><span>Following</span>
        </div>
      </div>
    </RowList>
  )
}