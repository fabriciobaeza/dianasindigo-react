import React from 'react';
import Hair1 from '../images/dihair1.jpg';
import Hair2 from '../images/dihair3.jpg';
import Hair3 from '../images/dihair4.jpg';
import Hair4 from '../images/dihair5.jpg';
import Hair5 from '../images/dihair6.jpg';
import Hair6 from '../images/dihair7.jpg';
import Hair7 from '../images/dihair8.jpg';
import Hair8 from '../images/dihair9.jpg';

function Gallery(props) {
    return(
        <div className="container">
            <div>
                <h2>Gallery</h2>
                <hr />
            </div>
            <div>
                <div className="row">
                    <img src={Hair1} width="300" height="300" alt="hair"/>
                    <img src={Hair2} width="300" height="300" alt="hair"/>
                    <img src={Hair3} width="300" height="300" alt="hair"/>
                </div>
                <div className="row">
                    <img src={Hair4} width="300" height="300" alt="hair"/>
                    <img src={Hair5} width="300" height="300" alt="hair"/>
                    <img src={Hair6} width="300" height="300" alt="hair"/>
                </div>
                <div className="row">
                    <img src={Hair7} width="300" height="300" alt="hair"/>
                    <img src={Hair8} width="300" height="300" alt="hair"/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;