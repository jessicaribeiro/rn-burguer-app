import React from 'react';

const UserInput = ({userName, updateUserName}) => {
    return(
        <input type="text" value={userName} onChange={updateUserName}/>
    );
};

export default UserInput;
