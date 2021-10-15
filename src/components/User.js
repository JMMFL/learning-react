import React from "react";
import { useReducer } from "react";

const firstProfile = {
    first: "Johnny",
    last: "Cage",
    city: "Manhattan",
    state: "New York",
    admin: false
}



function User() {
    const [profile, setProfile] = useReducer((profile, details) => ({...profile, ...details}), firstProfile)
    
    return (
        <>
        <div style={{background: "lightblue"}}>
            <h1>{profile.first}</h1>
            <h2>{profile.last}</h2>
            <p>{profile.city}, {profile.state}</p>
            <p>Admin status: {profile.admin.toString()}</p>
        </div>
        <button onClick={() => setProfile({admin: true})}>Promote</button>
        </>
    );

}

export default User;