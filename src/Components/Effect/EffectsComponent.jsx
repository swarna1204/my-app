// TODO: Create a Component, that does an API call to get characters from Game of Thrones and display them in a list. https://thronesapi.com/api/v2/Characters
// - use the Fetch API to get the data
// - use the useEffect hook to fetch the data when the component mounts
// - use the useState hook to store the data
// - display the data in a list
import React, { useEffect, useState } from "react";

const GameOfThronesCharacters = () => {
  const [characters, setCharacters] = useState([]); // State to store character data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data); // Set the fetched data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <p>Loading characters...</p>;
  }

  if (error) {
    return <p>Error fetching characters: {error}</p>;
  }

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>{character.fullName}</h3>
            <p>
              <strong>Title:</strong> {character.title}
            </p>
            <img
              src={character.imageUrl}
              alt={character.fullName}
              style={{ width: "100px", borderRadius: "8px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameOfThronesCharacters;

