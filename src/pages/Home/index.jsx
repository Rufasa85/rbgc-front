import React, { useEffect, useState } from "react";
import "./style.css";
import { getMostCollected, getMostWanted } from "../../utils/API";
import GameCard from "../../components/GameCard";

const Home = () => {
  const [mostWanted, setMostWanted] = useState([]);
  const [mostCollected, setMostCollected] = useState([]);
  useEffect(() => {
    getMostWanted()
      .then((data) => {
        console.log(data);
        setMostWanted(data);
      })
      .catch((err) => {
        console.log("oh no!");
        console.log(err);
      });
    getMostCollected()
      .then((data) => {
        console.log(data);
        setMostCollected(data);
      })
      .catch((err) => {
        console.log("oh no!");
        console.log(err);
      });
  }, []);
  return (
    <div className="Home">
      <div className="most-wanted">
        <h2>Most Wanted</h2>
        <div className="most-wanted-cards">
          {mostWanted.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              img={game.img}
            />
          ))}
        </div>
      </div>
      <div className="most-collected">
        <h2>Most Collected</h2>
        <div className="most-collected-cards">
          {mostCollected.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              img={game.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
