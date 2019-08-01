import React, { useState, useEffect } from "react";
import { useInterval } from "../../helper-functions/custom-hooks";
import { connect } from "react-redux";
import { updateCooldown } from "../../actions/roomActions";

function Counter({ roomInfo: { cooldown }, updateCooldown, coolingDown }) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cooldown);
  }, [cooldown]);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count <= 0 && coolingDown) {
      updateCooldown(count)
    }
  }, 1000);

  return count > 0 ? <h1>{Math.round(count)}</h1> : <h1>explore</h1>;
}

const mapStateToProps = ({ roomReducer: { roomInfo, coolingDown }, }) => {
  return {
    roomInfo,
    coolingDown
  };
};

export default connect(
  mapStateToProps,
  { updateCooldown }
)(Counter);
