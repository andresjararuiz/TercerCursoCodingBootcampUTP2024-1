import { useEffect, useState } from "react";
import Card from "./Cards.jsx";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);
  const [alterEgo, setAlterEgo] = useState({});
  const apiCharacters = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const characters = res.results;
        setCharacters(characters);

        // Fetch alter ego images for each character
        // eslint-disable-next-line array-callback-return
        characters.map((data) => {
          const splitName = data.name.split(" ")[0];
          const urlAlterEgo = `${apiCharacters}?name=${splitName}`;
          //https://rickandmortyapi.com/api/character?name=Morty

          fetch(urlAlterEgo)
            .then((res) => res.json())
            .then((res) => {
              const alterEgo = res.results;
              if (alterEgo.length > 1) {
                setAlterEgo((beforeState) => ({
                  //spread operator - Copia todas las propiedades del estado anterior en un nuevo objeto.
                  ...beforeState,
                  //Toma el key and value del objeto
                  [data.id]: alterEgo[1].image,
                }));
              } else {
                setAlterEgo((beforeState) => ({
                  ...beforeState,
                  //Si ese objeto no tiene imagen presente en la API del alter ego
                  [data.id]: null,
                }));
              }
            })
            .catch((error) => {
              console.log(`Could not render the API: ${error.message}`);
            });
        });
      })
      .catch((error) => {
        console.log(`Could not render the API: ${error.message}`);
      });
  };

  useEffect(() => {
    fetchCharacters(apiCharacters);
  }, []);

  return (
    <>
      <Card characters={characters} alterEgo={alterEgo} />
    </>
  );
}

export default RenderAPI;
