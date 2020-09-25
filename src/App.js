import React, { useState, useEffect } from 'react';
import './styles/main.css';

function App() {
  const tShirts = [
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-qe5Z6lo-xxnqmby-front-large.jpg',
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-EvzwJED-paWB2Jb-front-large.jpg',
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-2MrwkKR-Ba1w8m1-front-large.jpg',
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-RA4pX87-ZQBPzaX-front-large.jpg',
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-P9GnLWP-1MVwOKz-front-large.jpg',
    'https://assets.viralstyle.com/campaigns/cd2da466-bf9c-f9f4-0d8f-ab5cf3d43bfa/Mxv1Mk-qe5Z6bo-xxnqmYy-front-large.jpg',
  ];

  const [imagesUrl, setImagesUrl] = useState(tShirts[0]);

  return (
    <div className='product-images grid place-items-center'>
      <div className='max-w-md rounded overflow-hidden shadow-lg bg-teal-100'>
        <img src={imagesUrl} alt='t-shirt' />
        <div className='color-choses flex justify-around items-center text-lg h-16'>
          <span>Color:</span>
          {tShirts.map((el, index) => {
            let bg = `bg-tShirtDemoColors-${index + 1}`;
            return (
              <button
                className={`${bg} text-white font-bold py-4 px-4 rounded-full focus:outline-none hove:scale-110 transform`}
                onClick={() => {
                  setImagesUrl(tShirts[index]);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
