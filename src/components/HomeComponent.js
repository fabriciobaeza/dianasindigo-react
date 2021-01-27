import React from 'react';
import HairCarousel from './CarouselComponent';

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <h4 style={{fontSize: 70}}>Welcome to Diana's Indigo</h4>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        Aute deserunt proident proident est adipisicing nostrud. Sit consectetur sunt quis reprehenderit quis deserunt ut exercitation. Voluptate pariatur anim dolore ad veniam excepteur aliqua mollit amet qui non. Eu nulla tempor pariatur incididunt ut consequat irure irure et. Culpa in ut esse consequat ex magna magna est cupidatat tempor.
                    </div>
                    <div className="col">
                        <HairCarousel />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Home;