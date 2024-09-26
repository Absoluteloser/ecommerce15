import React from 'react'
interface UserProfile{
    id:string;
    email:string;
}
const Profile:React.FC <UserProfile> = ({user}) => {
  return (
    <div>
        <h1>Profile</h1>
        <p>Welcome,{user.id}</p>
        <p>Email: {user.email}</p>
        <img src="" alt="no image available now" />
        <button>EDIT</button>
        <button>LOGOUT</button>
    </div>
  )
}
export default Profile