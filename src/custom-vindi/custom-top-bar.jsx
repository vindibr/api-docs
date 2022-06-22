import React from 'react';
import logo from './assets/logo-azul.png';


export default class CustomTopBar extends React.Component {
    render() {
        return (
            <div className="custom-top-bar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

        )
    }
}
