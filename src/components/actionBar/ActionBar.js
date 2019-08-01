import React from "react";
import { connect } from "react-redux";
import { validExit } from "../../helper-functions/display-functions";
import {
  moveRoom,
  getItem,
  sellItem,
  pray,
  dropItem
} from "../../actions/roomActions";
import { mapGraph } from "../../dummy-data-structures/map-graph";
import KeyboardEventHandler from "react-keyboard-event-handler";

function ActionBar({
  roomInfo: { exits, items, title, room_id, description },
  playerInfo: { inventory },
  visited,
  moveRoom,
  getItem,
  sellItem,
  coolingDown,
  pray,
  dropItem
}) {
  // const left = "37";
  // const up = "38";
  // const right = "39";
  // const down = "40";

  const moveRoomOnKey = (key, e, coolingDown, exits, room_id, mapGraph) => {
    if (key === 'up' && !coolingDown) {
      moveRoom("w", exits, room_id, mapGraph);
    }
    if (key === 'left' && !coolingDown) {
      moveRoom("s", exits, room_id, mapGraph);
    }
    if (key === 'right' && !coolingDown) {
      moveRoom("n", exits, room_id, mapGraph);
    }
    if (key === 'down' && !coolingDown) {
      moveRoom("e", exits, room_id, mapGraph);
    }
    if (key === 'enter' && !coolingDown && items.length > 0) {
      getItem(items[0])
    }
  };
  return (
    <div className="action_bar_container">
      <KeyboardEventHandler
        handleKeys={['all', '38', '37', '38', '39', '13']}
        onKeyEvent={(key, e) => {moveRoomOnKey(key, e, coolingDown, exits, room_id, mapGraph)}}
      />

      <h1
        onClick={
          !coolingDown ? () => moveRoom("w", exits, room_id, mapGraph) : null
        }
        className={!coolingDown && validExit("w", exits) ? "active" : ""}
      >
        N
      </h1>
      <h1
        onClick={
          !coolingDown ? () => moveRoom("e", exits, room_id, mapGraph) : null
        }
        className={!coolingDown && validExit("e", exits) ? "active" : ""}
      >
        S
      </h1>
      <h1
        onClick={
          !coolingDown ? () => moveRoom("n", exits, room_id, mapGraph) : null
        }
        className={!coolingDown && validExit("n", exits) ? "active" : ""}
      >
        E
      </h1>
      <h1
        onClick={
          !coolingDown ? () => moveRoom("s", exits, room_id, mapGraph) : null
        }
        className={!coolingDown && validExit("s", exits) ? "active" : ""}
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
      <h1
        onClick={inventory.length > 0 ? () => dropItem(inventory[0]) : null}
        className={inventory.length > 0 ? "active" : ""}
      >
        DROP
      </h1>
      <h1
        className={description.includes("shrine") ? "active" : ""}
        onClick={description.includes("shrine") ? pray : null}
      >
        PRAY
      </h1>
    </div>
  );
}

const mapStateToProps = ({
  roomReducer: { roomInfo, coolingDown },
  playerReducer: { playerInfo },
  mapReducer: { visited }
}) => {
  return {
    roomInfo,
    playerInfo,
    coolingDown,
    visited
  };
};

export default connect(
  mapStateToProps,
  { moveRoom, getItem, sellItem, pray, dropItem }
)(ActionBar);
