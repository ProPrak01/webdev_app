import React, { useState, useEffect } from 'react';
import Block from "./block"; 
export default function Body() {


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
        <Block/>
        <Block/>
        <Block/>
        <Block/> 
        </div>
       
        
    </div>

 </>
   
  )
}
