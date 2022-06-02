import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  let { username } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      This is the Profile page of { username }
       <button onClick={ () => {navigate('/')} }>Change to home page </button>

    </div>
   );
}

export default Profile;
