import React from "react";
import { connect } from "react-redux";

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
        <p>{description}</p>
      </div>

      <div className="items">
        <h1 className="room_description_header">Items</h1>
        {items.length === 0
          ? <p>There are no items in this room.</p>
          : items.map((item, i) => <p key={i}>{item} </p>)}
      </div>

      <div className="players">
        <h1 className="room_description_header">Players</h1>
        {players.length === 0
          ? <p>There are no items in this room.</p>
          : players.map(player => <p key={player}>{player} </p>)}
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
