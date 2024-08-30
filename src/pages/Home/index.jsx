import React, { useEffect, useState } from "react";
import "./style.css";
import { getMostCollected, getMostWanted } from "../../utils/API";
import GameCard from "../../components/GameCard";

const Home = (props) => {
  const [mostWanted, setMostWanted] = useState([]);
  const [mostCollected, setMostCollected] = useState([]);
  const updateCollection = () => {
    getMostCollected()
      .then((data) => {
        console.log(data);
        setMostCollected(data);
      })
      .catch((err) => {
        console.log("oh no!");
        console.log(err);
      });
  };
  const updateMostWanted = () => {
    getMostWanted()
      .then((data) => {
        console.log(data);
        setMostWanted(data);
      })
      .catch((err) => {
        console.log("oh no!");
        console.log(err);
      });
  };
  useEffect(() => {
    updateCollection();
    updateMostWanted();
  }, []);
  return (
    <div className="Home">
      <div className="most-wanted">
        <h2>Most Wanted</h2>
        <div className="most-wanted-cards">
          {mostWanted.map((game) => (
            <GameCard
              isWished={
                props.user.Wishlists.find((wish) => wish.GameId === game.id)
                  ? true
                  : false
              }
              isCollected={
                props.user.Collections.find(
                  (collection) => collection.GameId === game.id
                )
                  ? true
                  : false
              }
              key={game.id}
              title={game.title}
              description={game.description}
              img={game.img}
              isLoggedIn={props.isLoggedIn}
              token={props.token}
              id={game.id}
            />
          ))}
        </div>
      </div>
      <div className="most-collected">
        <h2>Most Collected</h2>
        <div className="most-collected-cards">
          {mostCollected.map((game) => (
            <GameCard
              isWished={
                props.user.Wishlists.find((wish) => wish.GameId === game.id)
                  ? true
                  : false
              }
              isCollected={
                props.user.Collections.find(
                  (collection) => collection.GameId === game.id
                )
                  ? true
                  : false
              }
              key={game.id}
              title={game.title}
              description={game.description}
              img={game.img}
              isLoggedIn={props.isLoggedIn}
              token={props.token}
              id={game.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
