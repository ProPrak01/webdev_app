import React, { useState, useEffect } from 'react';
import Block from "./block"; 
import Table from './favouritelist';

export default function Body() {

    const [likedItems, setLikedItems] = useState([]);



  return (
 <>
    <div className='row'>
        <div className='col'>
        <h1>Joke and Quote Generator</h1>
        <p className='mainpara'>
            This page generates random joke and quote when clicked on the tiles.
            By the way I am Prakash Kumar Jha , a passionate Web Developer.😁
        </p>

        </div>
        <div className='col'>
        <Block likedItems={likedItems} setLikedItems={setLikedItems} />
    <Block likedItems={likedItems} setLikedItems={setLikedItems} />
     <Block likedItems={likedItems} setLikedItems={setLikedItems} />
        <Block likedItems={likedItems} setLikedItems={setLikedItems} />
       


          <Table likedItems={likedItems} />

        
        </div>
        
    </div>

 </>
   
  )
}
