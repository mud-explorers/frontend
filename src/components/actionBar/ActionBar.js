import React from "react";
import { connect } from "react-redux";
import { validExit } from "../../helper-functions/display-functions";
import { moveRoom, getItem, sellItem } from "../../actions/roomActions";

function ActionBar({
  roomInfo: { exits, items, title },
  playerInfo: { inventory },
  moveRoom,
  getItem,
  sellItem,
  coolingDown
}) {
  return (
    <div className="action_bar_container">
      <h1
        onClick={!coolingDown ? () => moveRoom("n", exits) : null}
        className={!coolingDown && validExit("n", exits) ? 'active' : ''}
      >
        E
      </h1>
      <h1
        onClick={!coolingDown ? () => moveRoom("s", exits) : null}
        className={!coolingDown && validExit("s", exits) ? 'active' : ''}
      >
        W
      </h1>
      <h1
        onClick={!coolingDown ? () => moveRoom("e", exits) : null}
        className={!coolingDown && validExit("e", exits) ? 'active' : ''}
      >
        S
      </h1>
      <h1
        onClick={!coolingDown ? () => moveRoom("w", exits) : null}
        className={!coolingDown && validExit("w", exits) ? 'active' : ''}
      >
        N
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

const mapStateToProps = ({
  roomReducer: { roomInfo, coolingDown },
  playerReducer: { playerInfo }
}) => {
  return {
    roomInfo,
    playerInfo,
    coolingDown
  };
};

export default connect(
  mapStateToProps,
  { moveRoom, getItem, sellItem }
)(ActionBar);
