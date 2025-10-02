import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Detail from "../view/Detail";
import Film from "../view/Film";
export default function Index() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/film" component={Film}/>
        <Route path="/detail/:id" component={Detail}/>
        <Redirect from='/' to ='/film' />
      </Switch>
    </HashRouter>
  );
}
