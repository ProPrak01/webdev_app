import React from 'react';

function favoritelist({ likedItems }) {
  return (
<div className="favlist">
      <h2>Favorite Items list </h2>
<ul>
    {likedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default favoritelist;
