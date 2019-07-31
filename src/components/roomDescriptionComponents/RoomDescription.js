import React from "react";
import { connect } from "react-redux";
import { shopConverter } from '../../helper-functions/display-functions'

function RoomDescription({
  roomInfo: { title, coordinates, room_id, description, items, players }
}) {
  return (
    <div className="room_description_container">
      <div className="room_id_and_coords">
        <h1 className="room_description_header">ROOM {room_id}</h1>
        <h2>{coordinates}</h2>
      </div>

      <div className="title_and_description">
        <h1 className="room_description_header">{title}</h1>
        <p>{shopConverter(description, room_id)}</p>
      </div>

      <div className="items">
        <h1 className="room_description_header">Items</h1>
        <p>
            {items.length === 0
              ? "There are no items in this room."
              : items.map(item => `${item} `)}
          </p>
      </div>

      <div className="players">
        <h1 className="room_description_header">Players</h1>
        <div className="player_name_container">
          <p>
            {players.length === 0
              ? "There are no items in this room."
              : players.map(player => `${player} `)}
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ roomReducer: { roomInfo } }) => {
  return {
    roomInfo
  };
};

export default connect(
  mapStateToProps,
  {}
)(RoomDescription);
