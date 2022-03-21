import React from 'react';

const TitleJumbotron = function () {
    return (
        <div className="bg-dark p-5 rounded-lg m-3" style={{backgroundImage: "url(`./flirt.jpg`)"}}>
            <h1 className="display-4" style={{color: 'white'}}>Hello, world!</h1>
            <p className="lead" style={{color: 'white'}}>This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention
                to featured content or information.</p>
            <h1 className="my-4" style={{backgroundColor: 'white'}}>123</h1>
            <p style={{color: 'white'}}>It uses utility classes for typography and spacing to space content out within
                the larger container.</p>
            <a className="btn btn-light btn-lg" href="#" role="button">Learn more</a>
        </div>
    );
}

export default TitleJumbotron;