import React from 'react'
import propTypes from 'prop-types';
const ProfileComponent = ({handleName}) => {
    let fullName="lilia ansari";
    return (
        <div>
            <h2>fullName</h2>
            <h2>bio</h2>
            <h2>profession</h2>
            <button onClick={()=>{handleName(fullName)}} >send data</button>
        </div>
    )
}
ProfileComponent.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
}

export default ProfileComponent

