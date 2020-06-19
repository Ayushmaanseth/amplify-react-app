import React, { Component } from 'react';

const UserOutput = (props) => {
    return (
        <diV>
            <p> Hello, this is user output</p>
            <p> Username: {props.username}</p>
        </diV>
    );
}

export default UserOutput;