import React from 'react';
import './FormResponse.css'

function FormResponse({name, handleAnotherMessage}) {
    return (
        <div className="formresponse__container">
                <div className="formresponse">

                <svg xmlns="http://www.w3.org/2000/svg" width="55.722" height="55.722" viewBox="0 0 975.48 975.48" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M487.74 0c269.37 0 487.74 218.37 487.74 487.74S757.11 975.48 487.74 975.48 0 757.11 0 487.74 218.37 0 487.74 0zM223.08 547.87c-13.09-12.37-20.01-28.85-20.59-45.58-.59-16.83 5.23-33.89 17.59-47.16l.26-.3c12.37-13.09 28.87-20.03 45.59-20.61 16.83-.6 33.88 5.23 47.16 17.59l89.52 83.83 234.17-250.22c12.35-13.3 28.97-20.33 45.81-20.91 16.83-.59 33.9 5.23 47.18 17.6 13.29 12.37 20.31 29 20.9 45.84.59 16.84-5.23 33.9-17.61 47.18L408.77 721.6c-52.73-49.4-132.21-133.62-185.69-173.73z" fill="#3c6"/></svg>

                    <h2>Thank you {name} for contacting us!</h2>
                    <p>We will respond as soon as we can.</p>

                    <button onClick={handleAnotherMessage}> Send another message</button>
                </div>
        </div>
    )
}

export default FormResponse
