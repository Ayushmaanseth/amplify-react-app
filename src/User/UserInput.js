import React, { Component } from 'react';

const UserInput = () => {
    return <input type="text" onChange={props.changed} value={props.currentusername}> Username </input>
}

export default UserInput