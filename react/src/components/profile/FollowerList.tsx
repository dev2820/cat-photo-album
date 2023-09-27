import { RowList } from "../atom";

import { RowListProps, RoundAvatar } from "src/components/atom"
import type { Follower } from "src/requests/profile"

import "./FollowerList.css";

interface Props extends RowListProps {
  followers: Follower[]
}
export function FollowerList({followers=[],className="", ...props}:Props) {
  return (
    <RowList {...props} className={"follower-list " + className}>
      <RowList className="avatar-list">
        {
          followers.slice(0,3).map((follower,index)=>{
            return <RoundAvatar size={36} src={follower.avatarUrl} alt={`${follower.name}'s avatar`} key={index}></RoundAvatar>
          })
        }
      </RowList>
      <FollowerText followers={followers}></FollowerText>
    </RowList>
  )
}

const FollowerText = ({followers = []}:{followers: Follower[]}) => {
  if(followers.length > 2) {
    return (
      <p>
        Followed by <b>{followers[0].name}</b>, <b>{followers[1].name}</b> <br />
        and {followers.length -2 } others
    </p>
    )
  }
  if(followers.length === 2) {
    return (
      <p>
        Followed by <b>{followers[0].name}</b>, <b>{followers[1].name}</b>
    </p>
    )
  }
  if(followers.length === 1) {
    return (
      <p>
        Followed by <b>{followers[0].name}</b>,
    </p>
    )
  }
  return <p></p>
}