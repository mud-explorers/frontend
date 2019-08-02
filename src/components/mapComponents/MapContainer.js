import React from "react";
import { connect } from "react-redux";
import { mapGraph, hasBeenVisited } from "../../dummy-data-structures/map-graph";

function MapContainer({ map, roomInfo: { coordinates, exits }, visited }) {
  let columnCoord = +`${coordinates[1]}${coordinates[2]}`;
  let rowCoord = +`${coordinates[4]}${coordinates[5]}`;
  

  return (
    <div className="map_container">
      <div className="grid_container">
        {map.map((row, i) => {
          if (i >= 50) {
            return row.map((_, j) => {
              if (j >= 46) {
                const currentRoom = hasBeenVisited(i, j, mapGraph)
                const roomID = currentRoom[0]
                // const neighboringDirections = currentRoom[1]
                return (
                  <div
                    key={`${i}, ${j}`}
                    id={i === columnCoord && j === rowCoord ? "active" : ""}
                    className={roomID ? "visited" : ""}
                  >
                    {" "}
                    {/* {roomID && `${roomID}` } */}
                  </div>
                );
              } else {
                return null;
              }
            });
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  mapReducer: { map, visited },
  roomReducer: { roomInfo }
}) => {
  return {
    map,
    roomInfo,
    visited
  };
};

export default connect(
  mapStateToProps,
  {}
)(MapContainer);
