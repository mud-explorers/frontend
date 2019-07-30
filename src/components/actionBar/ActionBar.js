import React from "react";
import { connect } from "react-redux";
import { validExit } from "../../helper-functions/display-functions";
import { moveRoom, getItem, sellItem } from "../../actions/roomActions";

function ActionBar({ roomInfo: { exits, items, title }, playerInfo: {inventory}, moveRoom, getItem, sellItem }) {
  return (
    <div className="action_bar_container">
      <h1
        onClick={() => moveRoom("n", exits)}
        className={validExit("n", exits)}
      >
        N
      </h1>
      <h1
        onClick={() => moveRoom("s", exits)}
        className={validExit("s", exits)}
      >
        S
      </h1>
      <h1
        onClick={() => moveRoom("e", exits)}
        className={validExit("e", exits)}
      >
        E
      </h1>
      <h1
        onClick={() => moveRoom("w", exits)}
        className={validExit("w", exits)}
      >
        W
      </h1>
      <h1
        onClick={inventory.length > 0 ? () => sellItem(inventory[0]) : null}
        className={
          title.toLowerCase() === "shop" && inventory.length > 0 ? "active" : ""
        }
      >
        SELL
      </h1>
      <h1
        onClick={items.length > 0 ? () => getItem(items[0]) : null}
        className={items.length > 0 ? "active" : ""}
      >
        PICKUP
      </h1>
      <h1>PRAY</h1>
    </div>
  );
}

const mapStateToProps = ({ roomReducer: { roomInfo }, playerReducer: { playerInfo} }) => {
  return {
    roomInfo,
    playerInfo
  };
};

export default connect(
  mapStateToProps,
  { moveRoom, getItem, sellItem }
)(ActionBar);
