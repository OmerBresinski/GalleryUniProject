import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Location } from "pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/location/:id" component={Location} />
            </Switch>
        </Router>
    );
};

export default Routes;
