import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/:id">
          <ItemPage />
        </Route>
      </Switch>
    </>
  );
}
