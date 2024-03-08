import React from 'react';

const Character = ({ name, imgUrl, birth, death, race, realm, spouse }) => {
    return (
        <div>
            <img src={ imgUrl } alt={ name } />
        </div>
    );
};

export default Character;
