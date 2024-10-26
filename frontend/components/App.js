import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const { data: planets } = await axios.get(urlPlanets);
    const { data: people } = await axios.get(urlPeople);
    const combinedData = people.map((person) => {
      const planet = planets.find((planet) => planet.id === person.homeworld);
      return { name: person.name, id: person.id, planet: planet.name };
    });
    setCharacters(combinedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {characters.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          planet={character.planet}
        />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;