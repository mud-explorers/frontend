import React, { useEffect } from "react";
import { Route, Switch } from "react-browser-router";
import MapPage from "./views/MapPage";
import NavBar from "./components/navBars/NavBar";
import { getRoom } from "./actions/roomActions";
import { getPlayer } from "./actions/playerActions";
import { connect } from "react-redux";

function App({ getRoom, getPlayer}) {
  useEffect(() => {
    getRoom();
    getPlayer();
  }, );

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={MapPage} />
      </Switch>
    </div>
  );
}



export default connect(
  null,
  { getRoom, getPlayer }
)(App);
