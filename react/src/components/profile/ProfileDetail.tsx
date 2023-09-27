import type { Profile } from "src/requests/profile"
import "./ProfileDetail.css";

export const ProfileDetail = ({ profile }: { profile: Profile }) => {
  return (<>
    <strong>{ profile.name }</strong>
    <p className="text-light">
      { profile.location }
    </p>
    <p>{ profile.bio }</p>
    <a href={profile.githubUrl}>Link to Github</a>
  </>)
}