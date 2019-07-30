import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";

function ExploreBar({ roomInfo: { messages, errors, cooldown }, playerInfo }) {
  return (
    <div className="explore_bar_container">
      <div className="explore">
        <Counter />
      </div>
      <div className="explore_messages">
        {messages.map(message => (
          <h1>{`${message} `}</h1>
        ))}
        {playerInfo.messages.map(message => (
          <h1>{`${message} `}</h1>
        ))}
        {errors.map(error => (
          <h1>{`${error} `}</h1>
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
