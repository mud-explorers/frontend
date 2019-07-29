import React from "react";
import { connect } from "react-redux";

function PlayerDescription({
  playerInfo: { name, gold, encumbrance, strength, speed, inventory }
}) {
  return (
    <div className="player_description_container">
      <div className="name_and_gold">
        <h1 className="room_description_header">{name}</h1>
        <h1 className="room_description_header">
          $ <span>{gold}</span>
        </h1>
      </div>
      <div className="spacer" />
      <div className="lower_player_description">
        <div className="player_stats">
          <h2>
            Encumberance: <span>{encumbrance}</span>
          </h2>
          <h2>
            Strength: <span>{strength}</span>
          </h2>
          <h2>
            Speed: <span>{speed}</span>
          </h2>
        </div>
        <div className="inventory">
          <h2>Inventory:</h2>
          {inventory.length === 0 ? (
            <p>No items</p>
          ) : (
            inventory.map(item => <span>{item}</span>)
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ playerReducer: { playerInfo } }) => {
  return {
    playerInfo
  };
};

export default connect(
  mapStateToProps,
  {}
)(PlayerDescription);
