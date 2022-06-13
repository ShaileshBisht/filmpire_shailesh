import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route path="/movie/:id" exact>
          <MovieInformation />
        </Route>
        <Route path="/actors/:id" exact>
          <Actors />
        </Route>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="/profile/:id" exact>
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
