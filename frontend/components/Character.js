import React, { useState } from 'react'

function Character({ name, planet }) { 
  const [showPlanet, setShowPlanet] = useState(false);

  return (
    <div className="character-card" onClick={() => setShowPlanet(!showPlanet)}>
      <h3 className="character-name">{name}</h3>
      {showPlanet && (
        <p>
          Planet:
          <span className="character-planet">{planet}</span>
        </p>
      )}
      
    </div>
  );
}

export default Character
