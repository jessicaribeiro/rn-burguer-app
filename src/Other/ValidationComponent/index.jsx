import React from 'react';

const ValidationComponent = ({textLength}) => {

    return (
        textLength < 5 ? <p>Text too short</p> : <p>Text long enough</p>
    );
};

export default ValidationComponent;