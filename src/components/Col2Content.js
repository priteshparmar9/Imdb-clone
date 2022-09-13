import React from "react";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '988084088cmshfbab1bc14893246p1da89bjsnc2615a4056b5',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
};

fetch('https://movies-app1.p.rapidapi.com/api/trailers/%7Bid%7D', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

                    // <div className="col">

                    //     <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jBltxS8HfQ4?autoplay=1&mute=1" width="800" height="400"></iframe>
                        
                    // </div>
function Col2Content() {
    return (
        <div className="col-sm-10 bg-secondary">
            Main Content Will be available here.
            <div className="container">
                <div className="row">
                    <div className="col">

                        <h1>Harry Potter</h1>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                        {/* <image href="https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"></image> */}
                        <img className="rounded mx-auto"  src="https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Col2Content;