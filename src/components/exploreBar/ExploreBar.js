import React from "react";
import { connect } from "react-redux";

function ExploreBar({ roomInfo: { messages }, playerInfo }) {
  return (
    <div className="explore_bar_container">
      <div className="explore">
        <h1>explore</h1>
      </div>
      <div className="explore_messages">
        {messages.map(message => (
          <h1>{`${message} `}</h1>
        ))}
        {playerInfo.messages.map(message => (
          <h1>{`${message} `}</h1>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  roomReducer: { roomInfo },
  playerReducer: { playerInfo }
}) => {
  return {
    roomInfo,
    playerInfo
  };
};

export default connect(
  mapStateToProps,
  {}
)(ExploreBar);
