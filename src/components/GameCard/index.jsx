import React from "react";
import "./style.css";
import {
  addToCollection,
  addToWishlist,
  removeFromCollection,
  removeFromWishlist,
} from "../../utils/API";

const GameCard = (props) => {
  const addCollection = () => {
    addToCollection(props.token, props.id).then((data) => {
      location.reload();
    });
  };
  const removeCollection = () => {
    removeFromCollection(props.token, props.id).then((data) => {
      location.reload();
    });
  };
  const addWishlist = () => {
    addToWishlist(props.token, props.id).then((data) => {
      location.reload();
    });
  };
  const removeWishlist = () => {
    removeFromWishlist(props.token, props.id).then((data) => {
      location.reload();
    });
  };
  return (
    <div className="GameCard">
      <h3>{props.title}</h3>
      <img src={props.img} alt={`${props.title} boardgame`} />
      <p>{props.description}</p>
      {props.isLoggedIn ? (
        <>
          {props.isCollected ? (
            <button className="remove-button" onClick={removeCollection}>
              Remove from collection
            </button>
          ) : (
            <button className="add-button" onClick={addCollection}>
              Add To collection
            </button>
          )}
          {props.isWished ? (
            <button className="remove-button" onClick={removeWishlist}>
              Remove from Wishlist
            </button>
          ) : (
            <button className="add-button" onClick={addWishlist}>
              Add To Wishlist
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default GameCard;
