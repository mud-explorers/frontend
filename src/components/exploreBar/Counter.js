import React, { useState, useEffect } from "react";
import { useInterval } from "../../helper-functions/custom-hooks";
import { connect } from "react-redux";

function Counter({ roomInfo: { cooldown } }) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cooldown)
  }, [cooldown])

  useInterval(() => {
    // Your custom logic here
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  return count > 0 ? <h1>{Math.round(count)}</h1> : <h1>explore</h1>;
}

const mapStateToProps = ({ roomReducer: { roomInfo } }) => {
  return {
    roomInfo
  };
};

export default connect(
  mapStateToProps,
  {}
)(Counter);
