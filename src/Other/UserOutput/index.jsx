import React from 'react';

const UserOutput = ({firstLine, username}) => {
    return (
        <div>
            <p>
                {firstLine}
            </p>
            <p>
                {username}
            </p>
        </div>
    );
};

export default UserOutput;