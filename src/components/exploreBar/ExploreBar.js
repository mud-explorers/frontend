import React from "react";
import { connect } from "react-redux";
import {messageConverter} from '../../helper-functions/display-functions'
import Counter from "./Counter";

function ExploreBar({ roomInfo: { messages, errors }, playerInfo }) {
  
  return (
    <div className="explore_bar_container">
      <div className="explore">
        <Counter />
      </div>
      <div className="explore_messages">
        {messages.map(message => (
          <h1 key={message}>{`${messageConverter(message)} `}</h1>
        ))}
        {playerInfo.messages.map(message => (
          <h1 key={message}>{`${message} `}</h1>
        ))}
        {errors.map(error => (
          <h1 key={error}>{`${error} `}</h1>
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
