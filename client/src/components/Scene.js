import React, { useRef } from 'react'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import './Scene.css';
// must download parallax feature, 
// command: npm install @react-spring/parallax

function Scene() {
    return (
        <div className='Scene'>
            <section>
                <img src="./images/hackmerced.png" id="tower" alt="tower"></img>
                <img src="./images/trees.png" id="trees" alt="trees"></img>
            </section>
        </div>
    );
}

export default Scene;