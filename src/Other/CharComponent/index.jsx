import React from 'react';
import './index.css';

const CharComponent = ({letter, deleteChar}) => {
    return (
        <div className="charComponent">
            <p onClick={deleteChar}>{letter}</p>
        </div>
    )
};

export default CharComponent;