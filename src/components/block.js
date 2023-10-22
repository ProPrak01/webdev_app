import React, { useState, useEffect,useRef } from 'react';

const api1 = 'https://official-joke-api.appspot.com/random_joke'; // Replace with the actual URL of API1
const api2 = 'https://api.quotable.io/random'; // Replace with the actual URL of API2

export default function Block({ likedItems, setLikedItems }) {
    const imgRef = useRef(null);
    
    const [type,typer]= useState('');
     const [joke, setJoke] = useState('');
    const [apiSource, setApiSource] = useState('api1');
    const fetchJoke = () => {
      const apiUrl = apiSource === 'api1' ? api1 : api2;
  
      
      fetch(apiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch joke');
          }
        })
        .then((data) => {
            if(apiUrl==api1){
                typer('joke');
                setJoke(data.setup + " " + data.punchline);
                imgRef.current.style.transform = "rotateY(180deg)";

            }
            else{
                typer('quote');

                setJoke(data.content);
                imgRef.current.style.transform = "rotateY(0deg)";

            }
         
          setApiSource(apiSource === 'api1' ? 'api2' : 'api1'); // Toggle between sources
        })
        .catch((err) => {
          console.log('Error:', err);
        });
    };

    const handleLike = (event) => {
        event.stopPropagation();
    
        if (!likedItems.includes(joke)) {
          setLikedItems([...likedItems, joke]);
        } else {
          // Remove the item from the liked items list
          const updatedLikedItems = likedItems.filter((item) => item !== joke);
          setLikedItems(updatedLikedItems);
        }
      };



  return (
    
      <div className='block'  onClick={fetchJoke}>
            <img className='img' src='./images/skull.png' ref={imgRef} ></img>
                <h4>{type}</h4>
                <p className='content'>{joke}</p>
                

      <button className='like' onClick={handleLike}>
        {likedItems.includes(joke) ? 'Unlike' : 'Like'}
      </button>
            </div>
           
      
  )
}
