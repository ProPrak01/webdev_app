import React, { useState, useEffect,useRef } from 'react';
import useSound from 'use-sound';
import sound from './sound.mp3';

const api1 = 'https://official-joke-api.appspot.com/random_joke'; 

const api2 = 'https://api.quotable.io/random'; 
export default function Block({ likedItems, setLikedItems }) {
    const image = useRef(null);


    const [playSound] = useSound(sound);

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
            throw new Error('failed');
          }
        })
        .then((data) => {
            if(apiUrl==api1){
                typer('joke');
                setJoke(data.setup + " " + data.punchline);
                image.current.style.transform = "rotateY(180deg)";

            }
            else{
                typer('quote');

                setJoke(data.content);
                image.current.style.transform = "rotateY(0deg)";

            }
         
          setApiSource(apiSource === 'api1' ? 'api2' : 'api1'); 
        })
        .catch((err) => {
          console.log('Error:', err);
        });

        
       
    };

    const likebutton = (event) => {

        event.stopPropagation();
    
        if (!likedItems.includes(joke)) {
          setLikedItems([...likedItems, joke]);
        } else {
          const updatedLikedItems = likedItems.filter((item) => item !== joke);
          setLikedItems(updatedLikedItems);
        }
        
      };
     


  return (
    
      <div className='block'  onClick={fetchJoke} >
            <img className='img' src='./images/skull.png' ref={image}  onClick={playSound}></img>
                <h4>{type}</h4>
                <p className='content'>{joke}</p>
                

      <button className='like' onClick={likebutton}>
        {likedItems.includes(joke) ? 'Unlike' : 'Like'}
      </button>

      
            </div>
           
      
  )
}
