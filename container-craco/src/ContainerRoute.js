import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { Suspender } from "./Suspender";

export const ContainerRoute = () => {
  return (
    <div>
      2 Container Route
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>
              <LinkButton />
            </div>
          </Route>
          <Route path="/timer">
            <LinkButton />
            <Suspender />
          </Route>
          <Route path="/timer/*">
            <LinkButton />
            <Suspender />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};