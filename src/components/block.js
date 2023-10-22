import React, { useState, useEffect } from 'react';

export default function Block() {

    const [joke, setJoke] = useState('');
  
    const fetchJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke") // Replace with your API URL
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Failed to fetch joke');
            }
          })
          .then((data) => {
            setJoke(data.setup + " " + data.punchline);
          })
          .catch((err) => {
            console.log('Error:', err);
          });
      };






  return (
    
      <div className='block'  onClick={fetchJoke}>
            <img className='img' src='./images/skull.png'></img>
                <h4>Joke</h4>
                <p className='content'>{joke}</p>
            </div>
    
  )
}
