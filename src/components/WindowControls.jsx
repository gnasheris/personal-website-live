import React from 'react'
import useWindowStore from '../store/window.js';

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls">
            <div className="close"
                onClick={() => closeWindow(target)
                } />
            <div className="minimize" />
            <div className="maximize" />

            <span style={{ marginLeft: 8, fontSize: 10 }}>{target}</span>

        </div >
    );


};

export default WindowControls;